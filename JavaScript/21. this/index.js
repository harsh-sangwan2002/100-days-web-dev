// window
console.log(this);

function fn() {
  // the value will depend upon the strict mode/ non-strict mode
  // window
  console.log(this);
}
fn();

const obj = {
  name: "John",
  fn: function () {
    // obj
    console.log(this);
  },
  fn2: function () {
    function innerFn() {
      // window
      console.log(this);
    }
    innerFn();
  },
  arrowFn: () => {
    // arrow function does not have its own this and it will take the this from the lexical scope
    // window
    console.log(this);
  },
};
obj.fn();
obj.fn2();
obj.arrowFn();