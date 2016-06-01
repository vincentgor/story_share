/**
 * Created by vinxent on 2016/5/26.
 */

const Promise = require('bluebird');

const orderService = require('./../service/Order');

/**
 *
 */
class Order {

    constructor() {

        /**
         * ### 用户注册
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

    }

}

module.exports = new Order();