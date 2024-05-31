const userModel = require('../models/userModel');

async function getUsers(req, res) {

    let users = await userModel.find();

    if (users)
        return res.json(users);

    else
        return res.json({
            message: "users not found"
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

module.exports = {
    getUsers,
    updateUser,
    deleteUser,
    getCookies,
    setCookies
}