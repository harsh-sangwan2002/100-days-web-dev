const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: 'Harsh' },
    { id: 2, name: 'Rahul' },
    { id: 3, name: 'Naman' },
]
// params
app.get('/user/:userName', (req, res) => {

    console.log(req.params);
    console.log(req.params.id);
    console.log(req.params.userName);

    res.send('User id received');
})

// queries -> for filtering the data
app.get('/user', (req, res) => {

    console.log(req.query);
    res.json(users);
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})