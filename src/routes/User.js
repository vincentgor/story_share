'use strict';

var userServer = require('./../service/User');

module.exports = function (router) {
    router.get('/use1', function *(next) {
        this.body = 'use1';
    });
    router.get('/use2', function *(next) {
        this.body = 'use2';
    });
    router.get('/use3', function *(next) {
        this.body = 'use3';
    });
};
