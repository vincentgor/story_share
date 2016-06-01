'use strict';

const Promise = require('bluebird');

const Driver = require('./../models').Driver;

class Server {

    constructor() {}

    createOrfind (obj) {
        console.log('createOrfind...');
        return Driver.findOrCreate({
            where: {
                name: obj.name
            },
            defaults: obj
        }).spread((instance, created) => {
            return {instance, created};
        });
    }

    find (obj) {
        console.log('find...');
        return Driver.findOne({
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