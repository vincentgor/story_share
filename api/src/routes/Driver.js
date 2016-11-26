'use strict';

const driverController = require('./../controllers/Driver');

const loginCheck = require('./../middleware/loginCheck');

module.exports = function (router) {

    router.get('/login', loginCheck.checkOffLine, driverController.login);
    router.get('/register', loginCheck.checkOffLine, driverController.register);

    router.get('/logout', loginCheck.checkOnLine, driverController.logout);
    router.get('/update', loginCheck.checkOnLine, driverController.update);
    router.get('/detail', loginCheck.checkOnLine, driverController.detail);

};
