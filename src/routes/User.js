'use strict';

const userController = require('./../controllers/User');

const loginCheck = require('./../middleware/loginCheck');

module.exports = function (router) {

    router.get('/login', loginCheck.checkOffLine, userController.login);
    router.get('/register', loginCheck.checkOffLine, userController.register);

    router.get('/logout', loginCheck.checkOnLine, userController.logout);
    router.get('/update', loginCheck.checkOnLine, userController.update);
    router.get('/detail', loginCheck.checkOnLine, userController.detail);

};
