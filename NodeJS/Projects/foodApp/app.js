const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const emailValidator = require('email-validator');


const app = express();
// Everything in express is done through middlewares

// This is a global middleware
app.use(express.json());

dotenv.config();

const db_link = process.env.DB_LINK;

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

mongoose.connect(db_link).then((db) => {
    console.log("DB connected");
}).catch(err => {
    console.log(err);
})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function () {
            return emailValidator.validate(this.email);
        }
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        min: 8,
        validate: function () {
            return this.confirmPassword === this.password;
        }
    }
})

// Define the hooks brefore the userModel creation
userSchema.pre('save', function () {
    this.confirmPassword = undefined
})

const userModel = mongoose.model('userModel', userSchema);

app.listen(3000, () => {

    console.log("Server listening on port 3000.");
})