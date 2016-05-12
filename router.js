'use strict';

var router = require('koa-router')();

var homeServer = require('./src/service/Home');

module.exports = function (app) {

    app.use(router.routes());
    app.use(router.allowedMethods());

    router.get('/logic', function *(next) {
        this.body = yield homeServer.create({
            city: 'guangzhou',
            street: 'heguanglu',
            number: 8
        });
    });

    router.get('/hello', function *(next) {
        this.body = 'hello world';
        yield next;
    }, function *(next) {
        this.body += 'hello world2'
    });

    router
        .get('/users/:id', function *(next) {
            this.body = '/users/:id';
        })
        .get('/users/:user/friends', function *(next) {
            this.body = 'my friends';
        });
};




