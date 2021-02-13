const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');

const orderSchema = new Schema({
    items: [
        [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'Product',
            },
            {
                type: mongoose.Schema.ObjectId,
                ref: 'Size',
            },
        ],
    ],
    total: {
        type: Number,
    },
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
});

module.exports = mongoose.model('Order', orderSchema);
