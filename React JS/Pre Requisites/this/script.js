// window
console.log(this);

function fn() {
    // window
    console.log(this);
}
fn();

let obj = {
    name: "Harsh",
    func: fn,
};

// obj
obj.func();

function fn2() {
    // obj
    console.log(this);
    function abc() {

        // window
        console.log(this);
    }
    abc();
}

let obj2 = {
    name: "Harsh",
    func: fn2,
};

obj2.func();
