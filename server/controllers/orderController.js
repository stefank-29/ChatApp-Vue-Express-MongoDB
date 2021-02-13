const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Size = mongoose.model('Size');
const Order = mongoose.model('Order');

exports.addOrder = async (req, res) => {
    const items = [];

    for (let i = 0; i < req.body.items.length; i++) {
        const product = new Product({ ...req.body.items[i].product });
        const size = new Size({ ...req.body.items[i].size });
        items.push([product, size]);
    }
    const order = new Order({
        items: items,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        zip: req.body.zip,
        street: req.body.street,
        streetNumber: req.body.streetNumber,
        total: req.body.total,
    });
    // console.log('order: ', order);

    await order.save();
    // console.log(order);
    res.send({ order: order });
};

exports.downgradeSizes = async (req, res, next) => {
    for (let i = 0; i < req.body.items.length; i++) {
        const size = req.body.items[i].size;
        const sizeDb = await Size.findOne({ _id: size._id });
        const updates = {
            quantity: sizeDb.quantity - 1,
        };
        await Size.findOneAndUpdate(
            { _id: size._id },
            { $set: updates }, // update
            { new: true, runValidators: true, context: 'query' }
        );
    }
    next();
};
