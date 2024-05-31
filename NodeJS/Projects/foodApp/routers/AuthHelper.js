const jwt = require('jsonwebtoken');

function privateRoute(req, res, next) {

    if (req.cookies.login) {

        let token = req.cookies.login;
        let isVerified = jwt.verify(token, process.env.SECRET_KEY);

        if (isVerified)
            next();

        else
            res.json({
                message: "User not verified"
            })
    }

    else
        res.json({
            message: "You are not logged in."
        })
}

module.exports = privateRoute;