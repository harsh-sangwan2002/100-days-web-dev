const express = require('express');
const app = express();

app.use(express.json());

const userRouter = express.Router();
let users = [
    { id: 1, name: 'Harsh' },
    { id: 2, name: 'Rahul' },
    { id: 3, name: 'Naman' },
]

app.use('/user', userRouter);
userRouter.route('/')
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser);

userRouter.route('/:id')
    .get(getUserById);

// getUser
function getUserById(req, res) {

    res.json({
        id: req.params.id
    });
}

// get
function getUser(req, res) {

    res.send(users);
}

// post
function postUser(req, res) {

    users = req.body;
    res.json({
        message: 'Data received successfully',
        users
    })
}

// update
function updateUser(req, res) {

    let data = req.body;
    for (let key in data)
        users[key] = data[key];

    res.send({
        message: "Data updated successfully"
    })
}

// delete
function deleteUser(req, res) {

    users = {};
    res.send({
        message: "Data deleted successfully"
    })
}

app.listen(3000, () => {

    console.log("Server listening on port 3000.");
})