// A function bundled together with it's lexical env is called a closure.
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}

x();

// Uses of closures -

// Module Design Pattern
// Currying
// Functions like once
// Memoize
// Maintaining state in async world
// setTimeouts
// Iterators 