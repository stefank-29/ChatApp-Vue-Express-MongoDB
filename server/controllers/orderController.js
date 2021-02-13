const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Size = mongoose.model('Size');

exports.addOrder = (req, res) => {
    console.log(req.body);
};
