const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Size = mongoose.model('Size');

exports.addProduct = async (req, res) => {
    const sizes = [];
    let n = 0;
    if (req.body.gender === 'male' || req.body.gender === 'female') {
        n = 10;
    } else {
        n = 15;
    }
    for (let i = 0; i < n; i++) {
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
    res.status(200).send();
};

exports.getProducts = async (req, res) => {
    const products = await Product.find({});
    res.send(products);
};
