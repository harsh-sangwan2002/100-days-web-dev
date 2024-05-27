# @harsh-first-package/calc-math-opr

## Description

`@harsh-first-package/calc-math-opr` is a simple npm package that provides basic arithmetic operations: addition and subtraction. It's perfect for small projects or learning purposes.

## Installation

To install this package, use npm:

```sh
npm install @harsh-first-package/calc-math-opr
```

## Usage
Here's how you can use the package in your project:

Step 1: Require the Package
Create a file named call.js and require the necessary functions from the package:

```js
const { add, sub } = require('@harsh-first-package/calc-math-opr');

// Perform addition
console.log(add(1, 2)); // Output: 3

// Perform subtraction
console.log(sub(1, 2)); // Output: -1
```

Step 2: Implement the Functions
The package provides two functions: add and sub, which you can use to perform addition and subtraction respectively. The index.js file contains the following implementation:

```js
module.exports = {
    add: function (x = 0, y = 0) {
        return x + y;
    },
    sub: function (x = 0, y = 0) {
        return x - y;
    }
}
```

Scripts
You can run the example usage by executing the start script defined in the package.json:

```json
{
  "name": "@harsh-first-package/calc-math-opr",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "private": false,
  "scripts": {
    "start": "node call.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

To run the script, use:


```sh
npm start
```

This will execute call.js and display the results of the addition and subtraction operations in the console.

## License
This project is licensed under the ISC License.