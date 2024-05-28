const express = require('express');
const app = express();

// Middleware which converts the data received from frontend into json
app.use(express.json());

let users = {};

// get
app.get('/user', (req, res) => {
    res.send(users);
})

// post
app.post('/user', (req, res) => {

    users = req.body;
    res.json({
        message: "Data received successfully",
        users: users
    })
})

// update
app.patch('/user', (req, res) => {

    let data = req.body;
    for (let key in data)
        users[key] = data[key];

    res.send({
        message: "Data updated successfully"
    })
})

// delete
app.delete('/user', (req, res) => {

    users = {};
    res.send({
        message: "Data deleted successfully"
    })
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})