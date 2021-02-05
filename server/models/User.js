const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const md5 = require('md5');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');
const { use } = require('passport');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: 'Please enter a username.',
    },
    name: {
        type: String,
        trim: true,
    },
    surname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid email address'],
        required: 'Please enter an email address',
    },
});

userSchema.virtual('gravatar').get(function () {
    const hash = md5(this.email);
    return `https://gravatar.com/avatar/${hash}?s=200&d=retro`;
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'username' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
