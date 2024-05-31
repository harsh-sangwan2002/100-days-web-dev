const express = require('express');
const jwt = require('jsonwebtoken');

const userModel = require('../models/userModel');
const authRouter = express.Router();

authRouter.route('/signup')
    .get(getSignUp)
    .post(postSignUp)
    .patch(updateUser)
    .delete(deleteUser);

authRouter.route('/login')
    .post(loginUser);

async function loginUser(req, res) {

    let { email, password } = req.body;

    try {

        let user = await userModel.findOne({ email });

        if (user) {

            if (user.password == password) {

                let uid = user['_id'];
                let token = jwt.sign({payload:uid},process.env.SECRET_KEY);
                res.cookie('login', token, { httpOnly: true });

                res.json({
                    message: "Logged in successfully.",
                    user
                })
            }

            else {
                res.json({
                    message: "Wrong credentials"
                })
            }
        }

        else {
            res.json({
                message: "Wrong credentials"
            })
        }
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}

function getSignUp(req, res, next) {

    console.log('SignUp called');
    next();
}

function postSignUp(req, res, next) {

    let data = req.body;
    let user = userModel.create(data);

    res.json({
        message: "User created successfully.",
        user
    })
}

function updateUser(req, res) {

}

function deleteUser(req, res) {

}

// req/res params are carried forward to the next middleware
function middleware1(req, res, next) {

    console.log("Middleware 1 called");
    next();
}

function middleware2(req, res, next) {

    console.log("Middleware 2 called & ended req/res cycle.");
    res.json({
        message: "Ended req/res cycle."
    })
}

module.exports = authRouter;