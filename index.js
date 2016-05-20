'use strict';

console;    // 其实我也不知道为何要这么些，但是不这么做的话，在debug模式下，我的ide不干了

const path = require('path');

const koa = require('koa');
const router = require('koa-router')();
const koa_static = require('koa-static');
const cors = require('koa-cors');
const logger = require('koa-logger');

const models = require('./src/models');

const app = koa();

app.use(koa_static(path.join(__dirname, 'bower_components')));
app.use(koa_static(path.join(__dirname, 'public')));   // 这里最好不要直接写'public'，可能会有路径错误
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());

// x-response-time
app.use(function *(next) {
    let start = new Date();
    console.log('some one is coming');
    yield next;
    let ms = new Date() - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function *(next) {
    let start = new Date();
    console.log('this is logger');
    yield next;
    let ms = new Date() - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

require('./router')(router);

/**
 * 404
 */
app.use(function *(next) {
    yield  next;
    if (404 != this.status) {
        return;
    }
    switch (this.accepts('html', 'json')) {
        case 'html':
            this.type = 'html';
//            this.body = 'html page not found!';
            this.redirect('back', '/404.html');
            break;
        case 'json':
            this.type = 'json';
            this.body = {
                msg: 'json page not found!'
            };
            break;
        default:
            this.type = 'text';
            this.body = 'text page not found!';
    }
});

const PORT = process.env.PORT || 8080;

models.sequelize.sync().then(function () {
    console.log('数据库构建完成');
    if (!module.parent) {
        app.listen(PORT, function () {
            console.log('server is listening', PORT);
        });

        app.on('error', function (err, ctx) {
            console.log('server errer', err, ctx);
        });
    }
});


