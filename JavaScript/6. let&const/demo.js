// ReferenceError - cannot access a before initailisation
// console.log(a);

let a = 10;
// undefined - since let is hoisted in different memory space
console.log(this.a);

// SyntaxError - cannot redeclare let/const variables
// let a = 2;