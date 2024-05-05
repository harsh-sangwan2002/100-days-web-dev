let arr = ["Hi, ", "I", "am", "Harsh"];

// let a = arr[0], b = arr[1];

// Destructuring is a convenient way of accessing properties from an array or an object
// let [a,b,c,d] = arr;

// Skipping a value
// let [a, b, , d] = arr;

// Extra value
let [a, b, c, d, e = "Default"] = arr;

console.log(a);
console.log(b);
console.log(d);
