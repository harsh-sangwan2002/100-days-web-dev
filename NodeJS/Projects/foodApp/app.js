const express = require('express');
const app = express();

// Everything in express is done through middlewares

// This is a global middleware
app.use(express.json());

const authRouter = express.Router();

app.use('/auth', authRouter);
authRouter.route('/signup')
    .get(middleware1, getSignUp, middleware2)
    .post(postSignUp);

// req/res params are carried forward to the next middleware
function middleware1(req, res, next) {

    console.log("Middleware 1 called");
    next();
}

function getSignUp(req, res, next) {

    res.sendFile('/public/index.html', { root: __dirname });
    next();
}

function middleware2(req, res, next) {

    console.log("Middleware 2 called & ended req/res cycle.");
    res.json({
        message: "Ended req/res cycle."
    })
}

function postSignUp(req, res) {

    let obj = req.body;

    res.json({
        message: "Data received successfully.",
        data: obj
    })
}

app.listen(3000, () => {

    console.log("Server listening on port 3000.");
})