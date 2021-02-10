const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Size = mongoose.model('Size');

const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter(req, file, next) {
        const isPhoto = file.mimetype.startsWith('image/');
        if (isPhoto) {
            next(null, true);
        } else {
            next({ message: 'Error' }, false);
        }
    },
};

exports.upload = multer(multerOptions).single('file');

exports.resize = async (req, res, next) => {
    console.log(req.body);
    console.log(req.file);

    if (!req.file) {
        console.log('slikaaaa');
        next();
        return;
    }
    console.log(req.body);
};

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

exports.getSingleProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Product.find({ _id: id }).populate('sizes');
    res.send({ product: product });
};
