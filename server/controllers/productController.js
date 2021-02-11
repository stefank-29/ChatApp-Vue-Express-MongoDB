const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Size = mongoose.model('Size');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');
const fs = require('fs');

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
    if (!req.file) {
        next();
        return;
    }
    const extension = req.file.mimetype.split('/')[1];
    req.body.photo = `${uuid.v4()}.${extension}`; // unique name
    const photo = await jimp.read(req.file.buffer);
    await photo.resize(800, jimp.AUTO);
    await photo.write(`./media/uploads/${req.body.photo}`);
    // console.log(photo);
    // fs.writeFileSync(`./public/uploads/${req.body.photo}`, photo);
    req.body.sizes = JSON.parse(req.body.sizes); // deserijalizacija
    next();
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
        photo: req.body.photo,
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
