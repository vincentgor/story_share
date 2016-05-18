'use strict';

var fs = require('fs');
var path = require('path');

const Router = require('koa-router');

const utils = require('./utils');

module.exports = function (router) {

    let routesDir = path.join(__dirname, 'src/routes');
    fs
        .readdirSync(routesDir)
        .filter(function (file) {
            return (file.indexOf('.') !== 0) && (file !== 'index.js');
        })
        .forEach(function (file) {
            let fileName = utils.getFileNameFromFileStr(file);
            let subRouter = new Router();
            let routerModule = path.join(routesDir, file);
            require(routerModule)(subRouter);
            router.use('/' + fileName, subRouter.routes(), subRouter.allowedMethods());
        });

};




