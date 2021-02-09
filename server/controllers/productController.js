const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Size = mongoose.model('Size');

exports.addProduct = async (req, res) => {
    console.log(req.body);
    const sizes = [];
    for (let i = 0; i < 10; i++) {
        sizes.push(
            await new Size({
                number: req.body.sizes[i].number,
                quantity: req.body.sizes[i].quantity,
            }).save()
        );
    }
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        gender: req.body.gender,
        sizes: sizes,
    });
    await product.save();
};
