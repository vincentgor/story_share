/**
 * Created by vinxent on 2016/5/26.
 */
 
'use strict';

const Promise = require('bluebird');

const orderService = require('./../service/Order');

/**
 *
 */
class Order {

    constructor() {

        /**
         * 查看订单状况
         * @param id
         * @param next
         */
        this.checkOrder = function *(id, next) {
            let order = yield orderService.findById(id);
            if (!order) {
                delete this.session.order;
                return this.body = ({
                    code: 2,
                    msg: '拼单不存在'
                });
            }
            this.session.order = order;
            yield next;
        };

        /**
         * ### 发起拼单
         * @param next
         */
        this.post = function *(next) {
            let myself = this.session.user || this.session.driver;
            let driverId = this.session.driver ? this.session.driver.id : 0;

//            this.request.body = this.query;

            var obj = {
                originatorId: myself.id,
                driverId: driverId,
                cityOriginCode: this.request.body.cityOriginCode,
                cityDestinationCode: this.request.body.cityDestinationCode,
                origin: this.request.body.origin,
                destination: this.request.body.destination,
                beginTime: this.request.body.beginTime,
                createTime: Date.now()
            };

            let result = yield orderService.create(obj);
            this.type = 'json';
            if (result.id) {
                // 创建成功
                this.body = {
                    code: 0,
                    msg: '成功发起拼单'
                };
            } else {
                this.body = {
                    code: 1,
                    msg: '发起拼单失败'
                };
            }
        };

        /**
         * ### 查看拼单列表
         * @param next
         */
        this.list = function *(next) {
            this.body = {
                code: 0,
                msg: '查看拼单列表'
            }
        };

        /**
         * ### 查看拼单详情
         * @param next
         */
        this.detail = function *(next) {
            let order = this.session.order;
            this.body = {
                code: 0,
                msg: '这就是你想要的详情',
                data: order
            }
        };

        /**
         * ### 加入或者退出拼单(司机端)
         * @param next
         */
        this.driverJoinOrLeave = function *(next) {
            let order = this.session.order;   // 拼单记录
            let action = this.query.action === 'leave' || 'join';
//            let id = this.params.id;   // 拼单id
            let myself = this.session.driver;

            let msg = '';
            let code = 0;

            if (action === 'join') {
                // 加入
                if (order.driverId === myself.id) {
                    code = 3;
                    msg = '不能重复接单啊';
                } else if (order.driverId && order.driverId !== myself.id) {
                    code = 4;
                    msg = '已经有司机比你提前一步啦';
                } else {
                    // 准备接单吧，骚年
                    order.driverId = myself.id;
                    yield orderService.update(order, 'driverId');
                    code = 0;
                    msg = '成功接单';
                }
            } else {
                // 离开
                if (order.driverId !== myself.id) {
                    code = 5;
                    msg = '你并没有接下这个单啊';
                } else {
                    // 准备跑路吧，骚年
                    order.driverId = null;
                    yield orderService.update(order, 'driverId');
                    code = 0;
                    msg = '成功取消接单';
                }
            }

            this.body = {
                code,
                msg
            };

        };

        /**
         * ### 加入或者退出拼单(乘客端)
         * @param next
         */
        this.userJoinOrLeave = function *(next) {
            let order = this.session.order;   // 拼单记录
            let action = this.query.action === 'leave' || 'join';
            let id = this.params.id;   // 拼单id
            let myself = this.session.user;

            let msg = '';
            let code = 0;

            var result = yield orderService.getUser(id, myself.id);

            if (action === 'join') {
                // 加入



                if (order.driverId === myself.id) {
                    code = 3;
                    msg = '不能重复接单啊';
                } else if (order.driverId && order.driverId !== myself.id) {
                    code = 4;
                    msg = '已经有司机比你提前一步啦';
                } else {
                    // 准备接单吧，骚年
                    order.driverId = myself.id;
                    yield orderService.update(order, 'driverId');
                    code = 0;
                    msg = '成功接单';
                }
            } else {
                // 离开
                if (order.driverId !== myself.id) {
                    code = 5;
                    msg = '你并没有接下这个单啊';
                } else {
                    // 准备跑路吧，骚年
                    order.driverId = null;
                    yield orderService.update(order, 'driverId');
                    code = 0;
                    msg = '成功取消接单';
                }
            }

            this.body = {
                code,
                msg
            };

        };

        /**
         * ### 删除拼单
         * @param next
         */
        this.del = function *(next) {
            this.body = {
                code: 0,
                msg: '删除拼单'
            }
        };

    }

}

module.exports = new Order();