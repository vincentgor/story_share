'use strict';

const Promise = require('bluebird');

const Order = require('./../models').Order;
const Order_User = require('./../models').Order_User;

class Server {

    constructor() {}

    create (obj) {
        console.log('create...');
        return Order.create(obj, {
            raw: true
        }).get('dataValues').then((instance) => {
            return instance;
        });
    }

    findById (id) {
        console.log('findById...');
        return Order.findById(id, {
            raw: true
        }).then((instance) => {
            return instance;
        });
    }

    find (obj) {
        console.log('find...');
        return Order.findOne({
            where: {
                name: obj.name,
                password: obj.password
            },
            raw: true
        }).then((instance) => {
            return {instance};
        });
    }

    update (obj, fields) {
        if (!Array.isArray(fields)) {
            fields = [fields];
        }
        console.log('update...');
        return Order.update(obj, {
            fields:fields,
            where: {
                id: obj.id
            }
        }).spread((affectedCount) => {
//            if (affectedCount === 0) {
//                return Promise.reject('数据库错误');
//            }
            return affectedCount;
        });
    }

    /**
     *
     * @param userId
     * @param orderId
     */
    addUser (userId, orderId) {
        return Order_User.findOrCreate({
            where: {
                userId,
                orderId
            },
            defaults: {
                userId,
                orderId,
                createTime: Date.now()
            }
        });
    }

}

module.exports = new Server();