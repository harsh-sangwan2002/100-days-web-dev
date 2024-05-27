const util = require("util");

var myName = "Harsh";
// console.log("My name is %s", myName);
var result = util.format("My name is %s", myName);
console.log(result);

const obj = {
  name: "Harsh",
  courses: {
    sections: {
      content: {
        text: "JavaScript",
        format: {
          webFormat: {
            json: { a: 10, b: 20 },
          },
        },
      },
    },
  },
};

result = util.inspect(obj, { depth: 5 });
console.log(result);
