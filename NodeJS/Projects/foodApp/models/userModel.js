const emailValidator = require('email-validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const db_link = process.env.DB_LINK;

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

// hook for saving password in hashed form
userSchema.pre('save', async function () {

    let salt = await bcrypt.genSalt();
    let hashedString = await bcrypt.hash(this.password, salt);
    this.password = hashedString;
})

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;