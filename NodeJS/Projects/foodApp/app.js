const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

const userModel = require('./models/userModel');

const app = express();
// Everything in express is done through middlewares

// This is a global middleware
app.use(express.json());
app.use(cookieParser());

const authRouter = express.Router();
const userRouter = express.Router();

app.use('/auth', authRouter);
app.use('/user', userRouter);

authRouter.route('/signup')
    .get(getSignUp)
    .post(postSignUp)
    .patch(updateUser)
    .delete(deleteUser);

userRouter.route('/getCookies')
    .get(getCookies)

userRouter.route('/setCookies')
    .get(setCookies)

function getCookies(req, res) {

    let cookies = req.cookies;
    console.log(cookies);
    res.send("Cookies sent");
}

function setCookies(req, res) {

    // res.setHeader('Set-Cookie', "isLoggedIn=true");

    // httOnly -> frontend cannot access the cookie
    res.cookie('isLoggedIn', true, { maxAge: 1000 * 60 * 60 * 24, secure: true, httpOnly: true });

    // this cookie can be accessed on frontend
    res.cookie('isPrimeMember', true);

    res.send("Cookies has been set.");
}
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