
# React From Scratch

## Overview

* Install this tutorial [how to setup a react app from scratch](https://codeburst.io/setting-up-a-react-project-from-scratch-d62f38ab6d97)
* add draggable functionality
* add eslint
* config webpack and babel

---

### Installing this tutorial complete

#### install webpack-cli because current webpack version need that package

`npm install --save-dev webpack-cli`

#### downgrade babel-loader from 8 to 7, because babel-core 6 use that version

`npm install --save-dev babel-loader@7'`

---

### adding draggable functionality in a react scratch project

* [react drag from scratch](https://medium.freecodecamp.org/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a)

---

### adding eslint in a react project

#### install eslint and eslint-plugin-react
`npm install --save-dev eslint eslint-plugin-react`

#### start a new eslint configuration

`node_modules/eslint/bin/eslint.js --init`

#### modify the created eslint config to allow es16 with babel
install babel eslint plugin

`npm install --save-dev babel-eslint`

then modify the eslint configuration, .eslintrc.js in my case
`parser: "babel-eslint"`

#### add the following configs, to fix some minor errors

```json
{
  "env": {"node": true}, // adding the node env vars
  "extends": ["plugin:react/recommended"], // add the recommended react linting
  "settings": {
    "react": { // set the current react version for linting
      "pragma": "React",
      "version": "16"
    }
  }
}
```

#### some links
* [eslinting from scratch](https://medium.com/@RossWhitehouse/setting-up-eslint-in-react-c20015ef35f7)
* [eslint official docs](https://eslint.org/docs/user-guide/configuring)
* [babel eslint](https://www.npmjs.com/package/babel-eslint)
* [node require](https://stackoverflow.com/questions/30901417/eslint-how-to-set-eslintrc-to-recognize-require)
* [awesome eslint](https://github.com/dustinspecker/awesome-eslint#configs)
* [rules](https://eslint.org/docs/rules/)

---

### How to config a webpack and babel in a react project
* [webpack](https://webpack.js.org/concepts/)
* [webpack, babel and react from scratch 1](https://medium.com/@siddharthac6/getting-started-with-react-js-using-webpack-and-babel-66549f8fbcb8)
* [webpack, babel and react from scratch 2](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
* [configuring the devServer object](https://webpack.js.org/configuration/dev-server/)
* [diff between join and resolve](https://stackoverflow.com/questions/39110801/path-join-vs-path-resolve-with-dirname/39111164)

#### webpack does not recognize .jsx files
* [main article](https://stackoverflow.com/questions/34678314/webpack-cant-find-module-if-file-named-jsx)
```json
{
  "resolve": {
    "extensions": [".js", ".jsx"]
  }
}
```
there is still a problem because webstorm does not recognize relative path to use the ctrl+click(go-to-definition)...

#### relative imports webpack (1 and 2)
* [main article](https://stackoverflow.com/questions/27502608/resolving-require-paths-with-webpack)
add the following config in the resolve property
```json
{
  "resolve": {
    "modules": ["src", "node_modules"]
  }
}
```

#### Add babel loader to use it with webpack

`npm install --save-dev babel-loader`

---

### adding jest and enzyme for testing 
`npm install --save-dev jest babel-jest`
`npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json`
update package.json
```json
{
  "jest": {
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupFiles": ["./src/setupTests.js"]
  }
}
``` 
add jest to eslint config

`env:{"jest": true}`

#### fixing jest version
* [main problem babel 6 is not working with jest](https://stackoverflow.com/questions/47830273/babel-plugin-preset-files-are-not-allowed-to-export-objects-only-functions)
* stop using npm, and use only yarn to install packages
* install the following packages and modify the babelrc
```
'@babel/preset-env',
'@babel/preset-react'
```
* install the following babel packages
```
"@babel/plugin-transform-arrow-functions",
"@babel/plugin-proposal-object-rest-spread",
"@babel/plugin-proposal-class-properties"
```
* [assignment and define property, FYI not necessary](http://2ality.com/2012/08/property-definition-assignment.html)
* [practices to follow](https://alligator.io/react/testing-react-redux-with-jest-enzyme/)

### redux
* [main article](https://levelup.gitconnected.com/learn-redux-by-building-redux-from-scratch-dcbcbd31b0d0)
