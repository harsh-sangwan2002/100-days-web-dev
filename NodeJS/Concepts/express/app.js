const express = require('express');

const app = express();

app.get('/', (req, res) => {

    // No need to set headers, and some statusCode
    res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {

    // No need to set headers, and some statusCode
    res.sendFile('./views/about.html', { root: __dirname });
})

app.get('/about-me', (req, res) => {

    res.redirect('/about');
})

// This is a middleware
app.use((req, res) => {

    res.statusCode(404).sendFile('./views/404.html', { root: __dirname });
})

app.listen(3000, () => {

    console.log("Server is listening on port 3000.");

})