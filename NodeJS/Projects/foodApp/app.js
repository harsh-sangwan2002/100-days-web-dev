const express = require('express');
const app = express();

app.use(express.json());

const authRouter = express.Router();

app.use('/auth', authRouter);
authRouter.route('/signup')
    .get(getSignUp)
    .post(postSignUp);

function getSignUp(req, res) {

    res.sendFile('/public/index.html', { root: __dirname });
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