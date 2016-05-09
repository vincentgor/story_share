var koa = require('koa');
var router = require('koa-router')();
var koa_static = require('koa-static');
var cors = require('koa-cors');
var app = koa();

app.use(koa_static(__dirname + '/bower_components'));
app.use(koa_static(__dirname + '/public'));   // 这里最好不要直接写'public'，可能会有路径错误

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

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
    console.log('logger');
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// your loggic
router.get('/', function *(next) {
    this.body = '//////'
});

// router.get('/hello', function *(next) {
//     this.body = 'hello world',
//     yield next;
// }, function *(next) {
//     this.body += 'hello world2'
// });
var users = [];
router
    .param('user', function *(id, next) {
        console.log(3333);
        this.user = users[id];
        if (!this.user) return this.status = 404;
        yield next;
    })
    .get('/users/:id', function *(next) {
        this.body = '2211';
    })
    .get('/users/:user/friends', function *(next) {
        this.body = 'my friends';
    });

app.listen(8080, function () {
    console.log('server is listening', __dirname, app.name, app.env, app.proxy);
});

app.on('error', function (err, ctx) {
    console.log('server errer', err, ctx);
});
