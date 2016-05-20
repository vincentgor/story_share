'use strict';

const userServer = require('./../service/User');

const users = {
    '1': 111,
    '2': 222,
    '3': 333
};

module.exports = function (router) {

    router.param('id', function *(id, next) {
        this.user = users[id];
        console.log(this.user);
        if (!this.user) return this.status = 404;
        yield next;
    });

    router.get('user2', '/users/:id', function *(next) {
        // ...
//        console.log(router.url('user2', { id: 3 }));
        this.body = router.url('user2', this.params.id);
    });

//    router.get('/user', function *(next) {
//        this.body = '假装这里有好多用户';
//    });
//
//    router.get('/user/:id', function *(next) {
//
//        this.body = '你是用户' + this.params.id;
//    });
//
//    router.get('/user/:id/favors', function *(next) {
//        let msg = '你是用户' + this.params.id;
//        msg += ',你喜欢我';
//        this.body = msg;
//    });


//    router.get('/userCreateOK', function *(next) {
//        this.body = yield userServer.create({
//            name: 'xiaoming',
//            sex: '男',
//            age: 24
//        }).catch((err) => {
//            return Promise.resolve('出错啦');
//        });
//    });
//
//    router.get('/userCreateError', function *(next) {
//        this.body = yield userServer.create({
//            name: '小明',
//            sex: '男',
//            age: 24
//        }).catch((err) => {
//            return Promise.resolve('出错啦');
//        });
//    });
//
//    router.get('/use', function *(next) {
//        this.body = 'use3';
//    });

};
