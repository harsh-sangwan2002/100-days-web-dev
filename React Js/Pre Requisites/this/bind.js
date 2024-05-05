// Using bind method
function fn() {
    // obj
    console.log(this);
    function abc() {

        // obj
        console.log(this);
    }
    let ret = abc.bind(this);
    ret();
}

let obj = {
    name: "Harsh",
    func: fn,
};
obj.func();

// Using arrow function
function fn2() {
    // obj
    console.log(this);
    abc = () => {
        console.log(this);
    }
    abc();
}

let obj2 = {
    name: "Harsh",
    func: fn2,
};
obj2.func();