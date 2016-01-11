var koa = require('koa');
var app = koa();

app.use(function *() {
    console.log('some is coming');
    this.body = 'hello world';
});

app.listen(8080, function() {
    console.log('server is listening');
});
