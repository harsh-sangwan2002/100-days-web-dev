const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const userModel = require('./models/userModel');

const app = express();
// Everything in express is done through middlewares

// This is a global middleware
app.use(express.json());


const authRouter = express.Router();

app.use('/auth', authRouter);
authRouter.route('/signup')
    .get(getSignUp)
    .post(postSignUp)
    .patch(updateUser)
    .delete(deleteUser);

// req/res params are carried forward to the next middleware
function middleware1(req, res, next) {

    console.log("Middleware 1 called");
    next();
}

async function getSignUp(req, res, next) {

    // get all the docs in userModel
    let users = await userModel.find();

    // get only one doc in userModel
    let abhishek = await userModel.findOne({ name: "Abhishek" });

    res.json({
        abhishek
    })
}

function middleware2(req, res, next) {

    console.log("Middleware 2 called & ended req/res cycle.");
    res.json({
        message: "Ended req/res cycle."
    })
}

async function postSignUp(req, res) {

    let user = req.body;
    let data = await userModel.create(user);

    res.json({
        message: "User created successfully",
        data
    })
}

async function updateUser(req, res) {

    let dataToBeUpdated = req.body;
    let user = await userModel.findOneAndUpdate({ email: "temp@gmail.com" }, dataToBeUpdated);

    res.json({
        message: "Data updated successfully"
    })
}

async function deleteUser(req, res) {

    let user = await userModel.findOneAndDelete({ email: "temp2@gmail.com" });

    res.json({
        message: "Data updated successfully",
        user
    })
}



app.listen(3000, () => {

    console.log("Server listening on port 3000.");
})