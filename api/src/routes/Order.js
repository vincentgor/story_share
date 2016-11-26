'use strict';

const orderController = require('./../controllers/Order');

const loginCheck = require('./../middleware/loginCheck');

module.exports = function (router) {

    // 查询拼单详情
    router.param('id', orderController.checkOrder);

    // 发起拼单
    router.post('/', loginCheck.checkOnLine, orderController.post);

    // 查看拼单列表
    router.get('/', loginCheck.checkOnLine, orderController.list);

    // 查看拼单详情
    router.get('/:id', loginCheck.checkOnLine, orderController.detail);

    // 加入或者退出拼单
    router.put('/:id/driver', loginCheck.checkOnLine, orderController.driverJoinOrLeave);

    // 加入或者退出拼单
    router.put('/:id/user', loginCheck.checkOnLine, orderController.userJoinOrLeave);

    // 删除拼单
    router.delete('/:id', loginCheck.checkOnLine, orderController.del);

};
