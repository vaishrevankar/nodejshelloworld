# Node.js Hello-World app
NodeJS hello world app for running a server on localhost and testing it out using mocha and istanbul.

## Steps for testing:
1. Install Node.js using the official website [here](https://nodejs.org/en/download/ "Node.js website"). Check the version using the command:
```
node -v
```
2. Install [npm](https://www.npmjs.com/ "javascript package manager"): It comes installed with Node.js. Check the version using the command:
```
npm -v
```
3. Inside the local repository, run the command:
```
npm test
```
This would run the test command specified inside package.json file using mocha and istanbul. [Mocha](https://mochajs.org/ "Mocha test framework") is a flexible javascript framework. [Istanbul](https://istanbul.js.org/ "Istanbul code coverage") is a for ensuring complete code coverage.
The command would generate test reports, which can be viewed, graphically, under coverage/lcov-report/index.html.
