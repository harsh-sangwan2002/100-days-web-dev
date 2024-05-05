// window
console.log(this);

function fn() {
  // the value will depend upon the strict mode/ non-strict mode
  // If the value of this is undefined/null this will be replaced with the globalObject -- this substitution
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

    arrow = () => {
      console.log(this);
    };
    arrow();
  },
  arrowFn: () => {
    // arrow function does not have its own this and it will take the this from the lexical scope
    // window
    console.log(this);
    function a() {
      console.log(this);
    }
    a();
  },
};
obj.fn();
obj.fn2();
obj.arrowFn();
