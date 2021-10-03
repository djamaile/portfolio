---
slug: how-i-structure-my-react-ts-applications
title: How I structure my React/TS applications
author: Djamaile Rahamat
author_title: Software Engineer
author_url: https://github.com/djamaile
author_image_url: https://avatars.githubusercontent.com/u/15789670?v=4
tags: [typescript, javascript, react]
---

(I have updated my react structure, you can read it here: https://dev.to/djamaile/how-i-structure-my-react-ts-applications-2021-145j)

It is currently summer vacation for me and I will be working on side projects. For my summer projects, I will use ReactJS for every front-end I create. I created a boilerplate repository that I can re-use for every side project. So, the goal of this post is to display my structure, but I am interested in your project structure and how you would do it differently.

If you just want to see the code, here you go: https://github.com/djamaile/react-boilerplate-2020

<!--truncate-->

Here is the picture of the structure:![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/1mh1pdk40jyrccmdru6z.png)

Let's dive into the folders!

### 📖 Api

In the API folder, I keep my API routes and API calls. Also, I create a generic request function with Axios. Which can be reused for API-requests.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/a5octo4kc27ceha3jqau.png)

### 🖼️ Assets

In the assets folders, I have three subfolders. Firstly, the CSS folder where I keep all my in-js-CSS files. Secondly, the images folder and I think this folder speaks for itself. Lastly, the theme folder and the theme folder is for Material-UI.

For every React project, I use Material-UI. With Material-UI we can also create a custom theme and that is what we do in the theme folder.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/idadf0blnt7f7c6ji1zc.png)

### 🧱 Components

Furthermore, we have the famous components folder. Re-usable functions will be put in the components folder and it can be used by functional components in the views folder.

### ☂️ Hooks

The hooks folder is cool but mostly unused. I rarely make custom hooks, but I still keep the folder there in case I have some genius idea that needs to be a hook.

### 🗺️ Routes

In the routes folder, I keep my routes! I think the only 'weird' thing I do in my routes folder is using suspense. I am using suspense to split the code of the views. Also, we use the theme provider of Material-UI so we can use the theme we created in the theme folder.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/xj6exwb4uk24xn0438iy.png)

### 🧪 Tests

Tests folder is there, but the question is if I even test...

### ⌨️ Types

So, as you know I am using Typescript. Therefore I have a folder called types where I can put in my Typescript types and interfaces. Props types are the only exemption. They get declared above the components themself.

### 🔨 Utils

I always create a lot of functions within a component. As a result, the component can become quite bloated. When I feel that is happening I will move the functions within the utils folder. Also, if a function is used by some other component then it is also going to the utils folder.

### 🗄️ Extra files

As you can see I still have some files at the root level. The important files are the configuration files for Eslint and Prettier. These two extend the Airbnb rules. Moreover, I have my own rules within them and for anyone with experience with Eslint and Prettier, it can be quite annoying to set them up. So, having these files already configured for every project I do is a lifesaver.

Well, that is my structure. You might be wondering but where are the folders for your state management? Well, I didn't create those folders because I use different state managers all the time. It just depends on what I want to use at that moment. How does your structure compare to mine?
