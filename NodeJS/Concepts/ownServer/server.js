const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    console.log("Backend server is running.");

    let path = "./views";
    let contentType = 'text/html';

    if (req.url.endsWith('.css')) {
        
        contentType = 'text/css';
        path = "./views" + req.url;

    } else {
        switch (req.url) {
            case "/":
                path += "/index.html";
                break;
            case "/about":
                path += "/about.html";
                break;
            default:
                path += "/404.html";
                break;
        }
    }

    fs.readFile(path, (err, data) => {

        if (err)
            console.log(err)

        else
            res.end(data)
    })

})

server.listen(3000, () => {
    console.log("Server is listening on port 3000.");
})