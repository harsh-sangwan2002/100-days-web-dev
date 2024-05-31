const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();

const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');

// This is a global middleware
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(3000, () => {

    console.log("Server listening on port 3000.");
})