// Impure fn ->
let a = 2;

function add(b) {

    // result depends on external factor that's why this is impure fn.
    return a + b;
}

console.log(add(5));

// A pure fn is that which gives the same result for the same set of inputs & the state should not mutate
function pure(a, b) {

    // This changes/mutates the external factor
    // We try to minimize the side-effects
    // console.log(a+b);

    return a + b;
}

console.log(pure(2, 5));