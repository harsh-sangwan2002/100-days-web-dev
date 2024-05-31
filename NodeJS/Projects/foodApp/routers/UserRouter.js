const express = require('express');

const { getUsers, updateUser, deleteUser, getCookies, setCookies } = require('../controller/userController');

const privateRoute = require('./authHelper');
const userRouter = express.Router();

userRouter.route('/getCookies')
    .get(getCookies)

userRouter.route('/setCookies')
    .get(setCookies)

userRouter.route('/')
    .get(privateRoute, getUsers);


module.exports = userRouter;