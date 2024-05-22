// file system module
const fs = require("fs");
const path = require("path");

let fullPath = path.join(__dirname, 'sample.txt');
var a = 2, b = 3;
var c = a + b;

// V8 engine identify whether the code is async or sync
// If code is sync it is taken care by event-loop 
// If the code is async it is taken care by libuv
// libuv internally has 4 threads

// This is handed over to the libuv as it is async task and the code will not get blocked
fs.readFile(fullPath, (err, data) => {

    if (err)
        console.log(err);

    else
        console.log(data.toString());
});

fullPath = path.join(__dirname, 'intro.js');
fs.readFile(fullPath, (err, data) => {

    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

console.log(c);