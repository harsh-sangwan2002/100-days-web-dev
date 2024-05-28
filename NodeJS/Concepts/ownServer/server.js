const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    console.log("Backend server is running.");

    let path = "./views";
    let contentType = 'text/html';
    res.statusCode = 200;

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

            case "/about-me":
                res.statusCode = 301;
                res.setHeader('Location', '/about');
                res.end();
                break;

            default:
                path += "/404.html";
                res.statusCode = 404;
                break;
        }
    }

    fs.readFile(path, (err, data) => {

        if (err)
            console.log(err)

        else {
            res.setHeader('Content-Type', contentType);
            res.end(data);
        }
    })

})

server.listen(3000, () => {
    console.log("Server is listening on port 3000.");
})