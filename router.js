'use strict';

var Router = require('koa-router');

module.exports = function (router) {

    var user = new Router();
    var home = new Router();

    require('./src/routes/User')(user);
    require('./src/routes/Home')(home);

    router.use('/user', user.routes(), user.allowedMethods());
    router.use('/home', home.routes(), home.allowedMethods());



};




