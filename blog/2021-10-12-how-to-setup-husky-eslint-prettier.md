---
slug: how-to-setup-husky-eslint-prettier
title: 'How to setup husky, eslint and prettier within minutes'
author: Djamaile Rahamat
author_title: Software Engineer
author_url: https://github.com/djamaile
author_image_url: https://avatars.githubusercontent.com/u/15789670?v=4
tags: [react, typescript]
---

Every project these days needs a linter of some sorts. So, let’s set one up for our React/Typescript project!

<!--truncate-->

repository: https://github.com/djamaile/hep-demo

### Starting up

Let’s first generate a simple React project by using `create-react-app`. Execute the following command:

```sh
npx create-react-app hep-demo --template typescript && cd hep-demo
```

Start the app and see if everything is working properly:

```sh
yarn start
```

:::tip

If you encounter a issue with "babel-jest": "^26.6.0" add a .env file with `SKIP_PREFLIGHT_CHECK=true` (echo 'SKIP_PREFLIGHT_CHECK=true' > .env )

:::

### Installing packages

Now that our app is working we can start by adding the needed packages. 
For this setup we would need prettier, husky, lint-staged, eslint-config-airbnb and spotify/prettier-config.
The last one is optional, you can also create your own prettier config but recently
I have been using spotify's config with pleasant results. 

To install the packages, execute the following command:

```sh
yarn add @spotify/prettier-config @typescript-eslint/parser husky lint-staged prettier -D
```

We will use the eslint config of airbnb to do that execute the following command: 

```sh
npx install-peerdeps --dev eslint-config-airbnb
```

In the root of your project, create a file called `.eslintrc.json` and add the following content to it:

```json
{
  "extends": [
    "airbnb"
  ],
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "no-console": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/camelcase": ["off"],
    "camelcase": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "jsx-a11y/no-static-element-interactions": "off",
    "react/prop-types": ["off"],
    "jsx-a11y/href-no-hash": ["off"],
    "jsx-a11y/click-events-have-key-events": ["off"],
    "import/no-unresolved": ["off"],
    "import/extensions": 0,
    "no-use-before-define": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".js", ".jsx", ".tsx", ".ts"]
      }
    ],
    "max-len": [
      "warn",
      {
        "code": 100,
        "tabWidth": 2,
        "comments": 80,
        "ignoreComments": false,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ]
  }
}
```

You, of course, don’t have to use the same rules as mine. Play with it and see what fits you the best!

### Configure package json

Once the packages are installed, we can make some changes in our package.json. Let’s first start with some handy scripts:

```json
"scripts": {
    ...
    "prettier:check": "prettier --check .",
    "prettier:write": "prettier --write .",
    "prepare": "husky install"
}
```

The prettier commands are there to check your code and the prepare script we will use in a bit to set up husky with a pre-commit hook.

But first in your `package.json` down below you can set prettier to `@spotify/prettier-config` and under that you can specify the `lint-staged` section.

```json
"prettier": "@spotify/prettier-config",
"lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
}
```

`lint-staged` will execute those commands on files that are ready to be committed. Basically, it will run its specified linter on all staged git files. But before that is possible, we need to make sure that husky triggers `lint-staged`.

In the root of your project run:

```sh
yarn prepare
```

Which will create the `.husky` folder in your project and after we can install a pre-commit hook:

```sh
npx husky add .husky/pre-commit "yarn lint-staged" 
```

This will create a pre-commit hook in the `.husky` folder. If we inspect the contents of the file you can see that it will run `yarn lint-staged`.

### Ignore files

Before we can test if it works, we should also create .ignore files for prettier and eslint. We don't want to end up scanning the `node_modules` folder! Create the files:

```sh
touch .eslintignore
touch .prettierignore
```

In both of the files you can add the same folders to ignore:

```
**/node_modules/**
**/build/**
**/dist/**
**/.git/**
**/public/**
```

### Testing

Now we can actually test if our setup works! First, we’ll need to set up a git for our project:

```sh
git init
git add .
git commit -m "first commit"
```

After you try to commit, you can see husky in action. It will execute `yarn lint-staged` which in turns calls prettier and eslint for our git staged files.

To see if it works on new stuff, let’s create a file called `Button.tsx` in the src directory. Once you have done that, add the following code to it:

```jsx
import React from 'react';

interface Props {
  size: string;
}

export const Button: React.FC<Props> = ({size}) => {
  size = 'big'; return <button>{size}</button>;
};
```

So, this piece of code is wrong but let eslint tell us why. Add the file and try to commit it:

```sh
git add .
git commit -m "feat: add button component"
```

If eslint is working well you should receive this error:

```sh
 error  Assignment to function parameter 'size'      no-param-reassign

 error  Missing an explicit type attribute for button  react/button-has-type

 ```

Seems like we have some errors, so let’s fix them before committing our button. Overwrite `Button.tsx` with the fixed code:

 ```jsx
 import React from 'react';

interface Props {
  size: string;
}

export const Button: React.FC<Props> = ({ size }) => {
  const rightSize = size ? 'big' : 'small'; return <button type="button">{rightSize}</button>;
};
```

The code now looks good, but the styling might look a bit off. But that is okay. We are going to let prettier handle that. Let’s try again to add and commit our Button component.

```sh
git add .
git commit -m "feat: add button component"
```

Now we should be greeted by green light and that our component is commited! In addition, if we look at the button component we can see that prettier has rewritten our component, to make it look nicer!

```jsx
import React from 'react';

interface Props {
  size: string;
}

export const Button: React.FC<Props> = ({ size }) => {
  const rightSize = size ? 'big' : 'small';
  return <button type="button">{rightSize}</button>;
};
```
