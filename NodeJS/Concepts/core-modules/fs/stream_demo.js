const fs = require('fs');

const bigFile = "C:/Users/hsang.000/Desktop/Major Project/Code/sql-text-converter/sql-text-converter.mp4";

const stream = fs.createReadStream(bigFile, { highWaterMark: 12000 });

// stream.on('open', () => {
//     console.log("Stream open");
// })

// stream.on('data', (chunk) => {
//     console.log(chunk.toString());
// })

// stream.on('end', () => {
//     console.log("No more data in stream");
// })

// stream.on('close', () => {
//     console.log("Stream closed");
// })

// stream.on("error", (err) => {
//     console.log(err);
// })

stream.pipe(process.stdout);