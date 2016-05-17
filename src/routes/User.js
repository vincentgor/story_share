'use strict';

var userServer = require('./../service/User');

module.exports = function (router) {
    router.get('/userCreateOK', function *(next) {
        this.body = yield userServer.create({
            name: 'xiaoming',
            sex: '男',
            age: 24
        }).catch((err) => {
            return Promise.resolve('出错啦');
        });
    });
    router.get('/userCreateError', function *(next) {
        this.body = yield userServer.create({
            name: '小明',
            sex: '男',
            age: 24
        }).catch((err) => {
            return Promise.resolve('出错啦');
        });
    });
    router.get('/use', function *(next) {
        this.body = 'use3';
    });
};
