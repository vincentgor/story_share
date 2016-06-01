'use strict';

const orderController = require('./../controllers/Order');

const loginCheck = require('./../middleware/loginCheck');

module.exports = function (router) {

    router.all('/', loginCheck.checkOnLine, orderController.post);

};
