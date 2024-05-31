// Imperative Code ->
let num = 2;
let squared = num * num;

if (squared % 2 == 0)
    console.log("Even");

else
    console.log("Odd");

// Declarative Way ->
const isSquareEven = (x) => ((x * x) % 2 == 0);
console.log(isSquareEven(4));