const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post(
    '/register',
    userController.validateRegister,
    userController.register,
    authController.login,
    authController.sendUser
);

router.post('/login', authController.login, authController.sendUser);
router.get('/logout', authController.logout);

router.get('/user', authController.isUserLoggedIn);

module.exports = router;
