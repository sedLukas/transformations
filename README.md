# Transformations

My solution to coding problem

## Installation

Transformations app requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the app.

```sh
cd transformations
yarn
```

## Example of usage

```sh
yarn start --input=testData --output outputTestData
yarn start --input=testData --output outputTestData --processors extraProcessors/add.js --processors extraProcessors/replace.js
```

## Time spend on this assignment

- 0:45 reading the assignment, plan the solution, small research about command-line-args | recursive copy | script execution
- 0:15h setting up the environment (typescript, eslint, prettier)
- 2:30h creating functions, testing, code cleanup
- 0:30h creating repository (repository, ssh, gitignore, readme)
- **Total: 4:00**

## Improvements

- I am not very happy with the eval function
- add tests
