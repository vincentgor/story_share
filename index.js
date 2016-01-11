var koa = require('koa');
//var router = require('koa-router')();
var app = koa();
app.use(require('koa-static')('public'));

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

app.listen(8080, function() {
    console.log('server is listening', app.name, app.env, app.proxy);
});

app.on('error', function(err, ctx) {
    console.log('server errer', err, ctx);
});
