'use strict';

var homeServer = require('./../service/Home');

module.exports = function (router) {
    router.get('/home1', function *(next) {
        console.log('1111111111');
        this.body = 'home1';
    });
    router.get('/home2', function *(next) {
        this.body = 'home2';
    });
    router.get('/home3', function *(next) {
        this.body = 'home3';
    });
};




