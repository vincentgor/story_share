'use strict';

const userController = require('./../controllers/User');

const loginCheck = require('./../middleware/loginCheck');

module.exports = function (router) {

    router.get('/login', loginCheck.checkLogin, userController.login);
    router.get('/register', userController.register);
    router.get('/update', userController.update);
    router.get('/detail', userController.detail);

};
