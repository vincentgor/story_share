'use strict';

const Promise = require('bluebird');

const Order = require('./../models').Order;

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

}

module.exports = new Server();