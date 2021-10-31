---
slug: using-keda-and-prometheus
title: Using KEDA and Prometheus to scale your k8s workloads
author: Djamaile Rahamat
author_title: Software Engineer
author_url: https://github.com/djamaile
author_image_url: https://avatars.githubusercontent.com/u/15789670?v=4
tags: [keda, prometheus, kubernetes]
---

These days, everyone and their grandma are using Kubernetes and one important
aspect of Kubernetes is scaling your workloads. With KEDA, it is extremely
simple to scale your workloads! Let’s have a look.

<!--truncate-->

repository: https://github.com/djamaile/keda-demo

### Introduction

Straight from the website of [KEDA](https://keda.sh):
> KEDA is a Kubernetes-based Event Driven
Autoscaler. With KEDA, you can drive the scaling of any container in Kubernetes
based on the number of events needing to be processed.

KEDA provides many 'triggers' on which your application can scale on. For
example, Prometheus, PubSub, Postgres and many more. In this blog post we will
focus on Prometheus.

### Starting up

First let's spin up a cluster! I am using [kind](https://kind.sigs.k8s.io/) but
you are free to use minikube if you prefer that :).

```sh
$ kind create cluster
```

*Create the namespace*

```sh
$ kubectl create ns keda-demo
```

*Switch to the namespace*

```sh
$ kubectl config set-context --current --namespace=keda-demo
```

If the cluster is spun up, we can start deploying our Prometheus. For this, I
have already written a prometheus manifest so you won’t have to do it.

*prometheus.yaml*
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: prometheus
rules:
  - apiGroups: [""]
    resources:
      - services
    verbs: ["get", "list", "watch"]
  - nonResourceURLs: ["/metrics"]
    verbs: ["get"]
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: keda-demo
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: prometheus
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: prometheus
subjects:
  - kind: ServiceAccount
    name: keda-demo
    namespace: keda-demo
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: prom-conf
  labels:
    name: prom-conf
data:
  prometheus.yml: |-
    global:
      scrape_interval: 5s
      evaluation_interval: 5s
    scrape_configs:
      - job_name: 'go-prom-job'
        kubernetes_sd_configs:
        - role: service
        relabel_configs:
        - source_labels: [__meta_kubernetes_service_label_run]
          regex: go-prom-app-service
          action: keep
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: prometheus-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: prometheus-server
  template:
    metadata:
      labels:
        app: prometheus-server
    spec:
      serviceAccountName: keda-demo
      containers:
        - name: prometheus
          image: prom/prometheus
          args:
            - "--config.file=/etc/prometheus/prometheus.yml"
            - "--storage.tsdb.path=/prometheus/"
          ports:
            - containerPort: 9090
          volumeMounts:
            - name: prometheus-config-volume
              mountPath: /etc/prometheus/
            - name: prometheus-storage-volume
              mountPath: /prometheus/
      volumes:
        - name: prometheus-config-volume
          configMap:
            defaultMode: 420
            name: prom-conf

        - name: prometheus-storage-volume
          emptyDir: {}
---
apiVersion: v1
kind: Service
metadata:
  name: prometheus-service
spec:
  ports:
    - port: 9090
      protocol: TCP
  selector:
    app: prometheus-server
```

The Prometheus manifest is really simple. Just a Prometheus workload with a
clusterrole and a clusterrolebinding. Don't forget to apply the manifest:

```sh
$ kubectl apply -f prometheus.yaml
```

Once the pod is up and running, let's see if it also works:

```sh
$ kubectl port-forward svc/prometheus-service 9090
```

Now visit `http://localhost:9090` and you should see the user interface of
Prometheus.

### Deploying Keda

We can now deploy the KEDA operator. KEDA provides multiple ways to deploy their
operator, but for now we will use the k8s manifest.

```sh
$ kubectl apply -f https://github.com/kedacore/keda/releases/download/v2.4.0/keda-2.4.0.yaml
```

Now there should be two pods in the namespace `keda` you can check it with the
following command:

```sh
$ kubectl get pods -n keda
```

As you can see there are two pods being spinned up:

```sh
on 🤠 kind-kind (keda) Desktop/projects/keda-prometheus ☁️  default
🕙[ 07:35:40 ] ❯ kubectl get pods                                                         335ms
NAME                                      READY   STATUS              RESTARTS   AGE
keda-metrics-apiserver-66b8c68649-2mwf8   0/1     ContainerCreating   0          5s
keda-operator-574c6d4769-q9mlc            0/1     ContainerCreating   0          5s
```

The metrics-apiserver exposes data to the Horizontal Pod Autoscaler, which gets
consumed by a deployment. The operator pod activates Kubernetes deployments to
scale to and from zero on no events.

### Creating the application (Optional)

The application is a simple go application that increments the metric
`http_requests` when you visit it. This section is optional because you are also
free to use my docker image.

in your folder execute the following:

```sh
go mod init github.com/djamaile/keda-demo
```

Then in your `main.go` you can put in the following code:

```go
package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

type Labels map[string]string

var (
	httpRequestsCounter = prometheus.NewCounter(prometheus.CounterOpts{
		Name: "http_requests",
		Help: "number of http requests",
	})
)

func init() {
	// Metrics have to be registered to be exposed:
	prometheus.MustRegister(httpRequestsCounter)
}

func main() {
	http.Handle("/metrics", promhttp.Handler())
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		defer httpRequestsCounter.Inc()
		fmt.Fprintf(w, "Hello, you've requested: %s\n", r.URL.Path)
	})
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

Now build the go application with:

```sh
$ go mod tidy
```

Let's then make a simple `Dockerfile` for it:

```dockerfile
FROM golang as build-stage

COPY go.mod /
COPY go.sum /
COPY main.go /
RUN cd / && CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o go-prom-app

FROM alpine
COPY --from=build-stage /go-prom-app /
EXPOSE 8080
CMD ["/go-prom-app"]
```

Only thing left is to build and push the image:

```sh
$ docker build -t <your_username>/keda .
$ docker push <your_username>/keda
```

### Running the application

If you don’t have a Docker account or don’t want to use it, that’s fine. You can
use my docker image! Let’s get our go application running in our cluster, for
that we need some k8s manifests. Not to worry because I already wrote them:

*go-deployment.yaml*

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: go-prom-app
  namespace: keda-demo
spec:
  selector:
    matchLabels:
      app: go-prom-app
  template:
    metadata:
      labels:
        app: go-prom-app
    spec:
      containers:
        - name: go-prom-app
          image: djam97/keda
          imagePullPolicy: Always
          ports:
            - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: go-prom-app-service
  namespace: keda-demo
  labels:
    run: go-prom-app-service
spec:
  ports:
    - port: 8080
      protocol: TCP
  selector:
    app: go-prom-app
```

You can replace the image name with your own image if you prefer that.
Let's apply the manifest:

```sh
$ kubectl apply -f go-deployment.yaml
```

If the pod is up verify if it is working

```sh
$ kubectl port-forward svc/go-prom-app-service 8080
```

If you visit `http://localhost:8080` you should see `Hello, you've requested: /`.

### Scaling the application

Now that we have our go application up we can write a manifest that will scale
our application. Keda offers many triggers that can scale our application, but
of course we will use the [Prometheus
trigger](https://keda.sh/docs/2.4/scalers/prometheus/).

In a new file called scaled-object.yaml add the following content:

```yaml
apiVersion: keda.sh/v1alpha1
# Custom CRD provisioned by the Keda operator
kind: ScaledObject
metadata:
  name: prometheus-scaledobject
spec:
  scaleTargetRef:
    # target our deployment
    name: go-prom-app
  # Interval to when to query Prometheus
  pollingInterval: 15
  # The period to wait after the last trigger reported active
  # before scaling the deployment back to 1
  cooldownPeriod: 30
  # min replicas keda will scale to
  # if you have an app that has an dependency on pubsub
  # this would be a good use case to set it to zero
  # why keep your app running if your topic has no messages?
  minReplicaCount: 1
  # max replicas keda will scale to
  maxReplicaCount: 20
  advanced:
    # HPA config
    # Read about it here: https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/
    horizontalPodAutoscalerConfig:
      behavior:
        scaleDown:
          stabilizationWindowSeconds: 30
          policies:
            - type: Percent
              value: 50
              periodSeconds: 30
        scaleUp:
          stabilizationWindowSeconds: 0
          policies:
            - type: Percent
              value: 50
              periodSeconds: 10
  triggers:
    - type: prometheus
      metadata:
        # address where keda can reach our prometheus on
        serverAddress: http://prometheus-service.keda-demo.svc.cluster.local:9090
        # metric on what we want to scale
        metricName: http_requests_total
        # if treshold is reached then Keda will scale our deployment
        threshold: "100"
        query: sum(rate(http_requests[1m]))
```

Read the yaml manifest and it’s comments to understand what is going on. One
important note as well is in
`advanced.horizontalPodAutoscalerConfig.scaleUp.policies` you can see I have
specified 50%, that means our pod will scale up with 50% of it’s current amount
of pods. `1 -> 2 -> 3 -> 5 -> 8 -> 12 -> 18 -> 20` it will stop at 20 pods because
that is the limit we specified.

Let's apply the manifest:

```sh
$ kubectl apply -f scaled-object.yaml
```

This will provision an HPA in your namespace which you can check with:

```sh
$ kubectl get hpa
```

but because this is a custom CRD you can also query the custom CRD with kubectl:

```sh
$ kubectl get scaledobject.keda.sh/prometheus-scaledobject

NAME                      SCALETARGETKIND      SCALETARGETNAME   MIN   MAX   TRIGGERS     AUTHENTICATION   READY   ACTIVE   FALLBACK   AGE
prometheus-scaledobject   apps/v1.Deployment   go-prom-app       1     20    prometheus                    True    False    False      64s
```

We can see that our `prometheus-scaledobject` is ready so let’s scale our
application! Remember our application scales on the metric
`http_requests_total`
and our threshold is only 100 so we should be able reach that threshold. For
this we can use a simple tool called [hey](https://github.com/rakyll/hey).

*Run the application*
```sh
$ kubectl port-forward svc/go-prom-app-service 8080
```

*In another terminal watch the pods*
```sh
$ kubectl get pods -w -n keda-demo
```

*Put load on the application (Do this continuously, until there are 20 pods)*

```sh
$ hey -n 10000 -m GET http://localhost:8080
```

It can take a minute before the application actually starts scaling. After a
while you should have 20 pods up and running! Now let’s also look at the scale
down process. Stop putting load on the application and let’s just watch the
pods. This process should go from `20 -> 10 -> 5 - > 2 -> 1`. This is basically
how KEDA goes to work!

If you like KEDA please check out their docs for more examples and what type of
different triggers they provide. Happy auto-scaling!
