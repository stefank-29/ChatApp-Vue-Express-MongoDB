const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const productShema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
    },
    sizes: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Size',
        },
    ],
});

module.exports = mongoose.model('Product', productShema);
