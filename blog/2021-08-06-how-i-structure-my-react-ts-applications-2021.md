---
slug: how-i-structure-my-react-ts-applications-2021
title: 'How I structure my React /TS applications (2021)'
author: Djamaile Rahamat
author_title: Software Engineer
author_url: https://github.com/djamaile
author_image_url: https://avatars.githubusercontent.com/u/15789670?v=4
tags: [typescript, javascript, react]
---

(code is hosted at: https://github.com/djamaile/react-boilerplate-2021)

(last years post: https://dev.to/djamaile/how-i-structure-my-react-ts-applications-160g)

Last year, I created a post on how I structure my ReactJS projects. Now that it is summer vacation again, I shook the structure up a bit. But honestly there are few changes, because in the end React changed little (which is a good thing). So, in this post I will highlight what I changed/added.

Lets first start with a picture of the whole folder structure!

<!--truncate-->

![Folder structure](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v2gi5gcq2xp701ek0mq5.png)

Now lets discuss the changes :)

### 📖 Api

In the API folder, I only now have a generic request function and what I added was react-query. If you are not familiar with react-query, it is a library for fetching server state. React-query comes with a lot of power like caching, data synchronisation, etc.

In this project, I have kept react-query pretty simple by only adding a `defaultQueryFn`, what looks like this:

```js
import axios, { Method, AxiosResponse } from 'axios';

const api = axios.create({
  // baseURL: process.env.REACT_APP_HOST_BACKEND,
  baseURL: 'https://rickandmortyapi.com/api',
});

const request = <T>(
  method: Method,
  url: string,
  params: any,
): Promise<AxiosResponse<T>> => {
  return (
    api.request <
    T >
    {
      method,
      url,
      params,
    }
  );
};

// Define a default query function that will receive the query key
export const defaultQueryFn = async ({ queryKey }: any): Promise<unknown> => {
  const data = await request(queryKey[0], queryKey[1], queryKey[2]);
  return data;
};
```

As you can see, the `defaultQueryFn` is calling the `request` function. Now we can add this to our `QueryClient` and in our Home view we can call the `useQuery` functionality like this:

```js
import React from 'react';
import '../../styles/home.css';
import { useQuery } from 'react-query';
import { Header } from '../../components';

const Home: React.FC = () => {
  const { data, error, isFetching } = useQuery(['GET', '/character', {}]);

  if (isFetching) return <p>Is loading...</p>;

  if (error) return <p>${error}</p>;

  console.log(data);

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default Home;
```

I am still experimenting with react-query and see how I can use it better. But this is how I have been using it for now.

### 🧪 Tests/Cypress

Yes, the infamous test folder. I actually ended up deleting it! I still have tests but I put them directly into the views/[view] folder.

![Test code in component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wdq0o5ephjy6o95m8b77.png)

I have to admit that I am not using Jest as much anymore. I have switched over to using Cypress. Cypress is a tool for end-to-end tests and I have been liking it so far. So, in `cypress/integration/404_page.ts` you can see I have a spec test that tests if the user can go back to the home page if the user has reached to 404 page.

```js
describe('404 page', function () {
  it('should give the option to return to home', function () {
    cy.visit('/does-not-exists');
    cy.contains('Return to Home');
    cy.get('a').click();
    cy.contains('Learn React', { timeout: 10000 });
  });
});
```

### 🐳 Docker

I have added also Dockerfiles to my default repo. I have two separate two Dockerfiles, one for development and one for production.

```Dockerfile
FROM node:15-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"
```

To build a image use:

```sh
$ docker build -t djam97/react-boilerplate-2021:prod -f docker/Dockerfile.prod .
```

### ☸️ Kubernetes

I use Kubernetes daily so that's why I added also some k8s manifests. They are pretty bare bone, but they get the job done and are easily extensible.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: react-boiler-plate
  labels:
    app: react-boiler-plate
spec:
  replicas: 1
  selector:
    matchLabels:
      app: react-boiler-plate
  template:
    metadata:
      labels:
        app: react-boiler-plate
    spec:
      containers:
        - name: react-boiler-plate
          image: djam97/react-boilerplate-2021:prod
          imagePullPolicy: Never
          ports:
            - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: react-boiler-plate-service
spec:
  selector:
    app: react-boiler-plate
  ports:
    - protocol: TCP
      port: 3000
      targetPort: 3000
```

To apply the manifests use:

```sh
$ kubectl apply -f k8s/
```

### 😺 Github workflow

I have also added a Github action that deploys your React app to Github pages. This is great for initial testing or for when your site is not going to have live on it's own server.

```yaml
name: Deploy site

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    continue-on-error: true
    strategy:
      matrix:
        node-version: [14.x]
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: '14.x'
      - name: Get yarn cache
        id: yarn-cache
        run: echo "::set-output name=dir::$(yarn cache dir)"
      - name: Cache dependencies
        uses: actions/cache@v1
        with:
          path: ${{ steps.yarn-cache.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-
      - name: Yarn installation
        run: yarn install && CI='' yarn build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.ACCESS_TOKEN }}
          publish_dir: ./buil
```

If you also want to use it, there are some steps you need to take. First, you need to create a personal access token in GitHub and add it as a secret to your repo as `ACCESS_TOKEN`. Last, change the homepage in `package.json`

```sh
 - "homepage": "https://djamaile.github.io/react-boilerplate-2021",
 + "homepage": "https://<your username>.github.io/react-boilerplate-2021",
```

###🗄️ Extra files
Besides the usual prettier, eslint, husky setup. I have also added `@commitlint/config-conventional` to make sure every commit complies with being a conventional commit. If you don't know what that is, you can read up on it here: https://www.conventionalcommits.org/en/v1.0.0/#summary
