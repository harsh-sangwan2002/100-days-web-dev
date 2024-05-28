const fs = require('fs');
const zlib = require('zlib');

const bigFile = "C:/Users/hsang.000/Desktop/Major Project/Code/sql-text-converter/sql-text-converter.mp4";
const destFile = "C:/Users/hsang.000/Desktop/Major Project/Code/sql-text-converter/sql-text-converter.gz";

const stream = fs.createReadStream(bigFile).pipe(zlib.createGzip()).pipe(fs.createWriteStream(destFile));