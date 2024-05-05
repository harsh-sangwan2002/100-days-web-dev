let obj = {
  name: "Harsh",
  state: "Delhi",
  country: "India",
};

// let name = obj.name;
// let state = obj[state];

let { name:a, state, country, extra="Default Value" } = obj;

console.log(a);
console.log(state);
console.log(country);
console.log(extra);