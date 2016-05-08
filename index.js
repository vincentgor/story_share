var koa = require('koa');
var router = require('koa-router')();
var koa_static = require('koa-static');
var app = koa();

app.use(koa_static(__dirname + '/bower_components'));
app.use(koa_static(__dirname + '/public'));   // 这里最好不要直接写'public'，可能会有路径错误

// x-response-time
app.use(function *(next) {
    var start = new Date;
    console.log('some is coming');
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function *() {
    this.body = 'hello world';
});

app.listen(8080, function () {
    console.log('server is listening', __dirname, app.name, app.env, app.proxy);
});

app.on('error', function (err, ctx) {
    console.log('server errer', err, ctx);
});
