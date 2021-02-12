const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const md5 = require('md5');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter a name.',
    },
    surname: {
        type: String,
        required: 'Please enter a surname.',
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid email address'],
        required: 'Please enter an email address',
    },
    phone: {
        type: String,
        trim: true,
        required: 'Please enter a phone number.',
    },
    city: {
        type: String,

        required: 'Please enter a city name.',
    },
    zip: {
        type: String,
        required: 'Please enter a zip code.',
    },
    street: {
        type: String,
        required: 'Please enter a street name.',
    },
    streetNumber: {
        type: String,
        required: 'Please enter a street number.',
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.virtual('gravatar').get(function () {
    const hash = md5(this.email);
    return `https://gravatar.com/avatar/${hash}?s=200&d=retro`;
});

// userSchema.plugin(uniqueValidator);
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
