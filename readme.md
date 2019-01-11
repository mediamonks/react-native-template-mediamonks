# React Native Template MediaMonks

A React Native template designed to quick start projects.
 
## Features
- Unit Testing with jest and enzyme.
- Make your code pretty with prettier.
- Control your commits with eslinter and husky.
- Redux integration and ready to go using asynchronous actions with redux-thunk.


##  Getting Started

### Pre-requisites:
Make sure you have the react-native CLI installed.
```
npm install -g react-native-cli
```

### Installation:
- Now using the react-native CLI you can make use of the template command specifying this project.
 
```
react-native init <Project Name> --template mediamonks
```
- The react-native template command creates a new package.json file which means we need to run a script to add the additional scripts and lint-staging to the package.json.
```
node scripts/install.js
```

## Suggestions
### Seng-generator
For the ability to generate components quickly make sure to install [seng-generator](https://github.com/mediamonks/seng-generator) cli.

#### Quick start
Default templates have already been setup, to make generating components a breeze.
```
npm i -g seng-generator
```
Generate a stateful component.
```
sg wizard component {component name}
```
Generate a functional component.
```
sg wizard functional-component {component name}
```
### Debugging
For the best debugging experience make sure to install [react-native-debugger](https://github.com/jhen0409/react-native-debugger).

## LICENSE

[MIT](./LICENSE) © MediaMonks







