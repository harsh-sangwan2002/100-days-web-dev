const fs = require("fs");

// This is a slow process & will not execute unless the full content is read
// That's why the concept of streaming comes into picture
// Async version
fs.readFile(__filename, (err, data) => {

    if (err)
        console.log(err);

    else
        console.log(data.toString());
});

// Sync version
try {

    let content = fs.readFileSync(__filename);
    console.log(content.toString());
    console.log("##############");

} catch (err) {

    console.log(err);
}
