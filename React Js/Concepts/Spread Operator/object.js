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

// Shallow copy
// let obj2 = obj;

// Deep Copy
// let obj2 = { ...obj, add: { ...obj.add, state: { ...obj.add.state } } };

// Deep copy using JSON.parse
let obj2 = JSON.parse(JSON.stringify(obj));

obj2.add.state.code = "PUN";

console.log(obj);
console.log(obj2);