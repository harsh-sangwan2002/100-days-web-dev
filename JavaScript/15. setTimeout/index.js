console.log("Start");

setTimeout(function () {
    console.log("Hello")
}, 5000);

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("End");