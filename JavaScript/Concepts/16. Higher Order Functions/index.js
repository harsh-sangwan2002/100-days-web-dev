// A function which takes another function as an arg or returns a function is known as higher order function.

let arr = [1, 2, 3, 4, 5];

let diameter = (radius) => 2 * radius;
let circumference = (radius) => 2 * Math.PI * radius;
let area = (radius) => Math.PI * radius * radius;

Array.prototype.calculate = function (logic) {

    let output = [];

    for (let i = 0; i < this.length; i++)
        output.push(logic(this[i]));

    return output;
}

console.log(arr.calculate(diameter));
console.log(arr.calculate(circumference));
console.log(arr.calculate(area));