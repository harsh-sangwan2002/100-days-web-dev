console.log(getName);
console.log(x);

// y will be hoisted as a variable and not as a function
console.log(y);
var x = 7;

function getName() {
    console.log("Namaste Javascript.");
}

var y = function fn(){
    console.log("Anonymous function.");
}