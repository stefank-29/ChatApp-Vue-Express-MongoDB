const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');

router.post(
    '/register',
    catchErrors(userController.validateRegister),
    catchErrors(userController.register),
    authController.login,
    authController.sendUser
);

router.post('/account', catchErrors(userController.updateAccount));

router.post('/login', authController.login, authController.sendUser);
router.get('/logout', authController.logout);

router.get('/user', authController.isUserLoggedIn);
router.get('/users', userController.getUsers);

// Products

router.get('/products', catchErrors(productController.getProducts));
router.post(
    '/products',
    productController.upload,
    productController.resize,
    catchErrors(productController.addProduct)
);

router.post(
    '/products/:id',
    productController.upload,
    productController.resize,
    catchErrors(productController.editProduct)
);

router.get('/products/:id', catchErrors(productController.getSingleProduct));

router.delete('/products/:id', catchErrors(productController.deleteProduct));
// router.get('/products/:id/update', catchErrors(productController.getSingleProduct));

router.post('/orders', orderController.downgradeSizes, orderController.addOrder);

router.get('/orders', catchErrors(orderController.getOrders));

module.exports = router;
