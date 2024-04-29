// Advantages of callback ->
// Helps in async operations
// Stops the blockage of main thread

setTimeout(function () {
    console.log('setTimeout');
}, 5000)

function x(y) {
    console.log("x");
    y();
}

x(function () {
    console.log(y)
});