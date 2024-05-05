let obj = {
  name: "Harsh",
  add: {
    country: "India",
    state: {
      code: "DL",
      pin: "1234",
    },
  },
};

let { name, add } = obj;
let {
  add: { country },
} = obj;
let {
  add: {
    state: { code },
  },
} = obj;

console.log(name);
console.log(country);
console.log(code);
