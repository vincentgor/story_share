'use strict';

const Promise = require('bluebird');

const User = require('./../models').User;

class Server {

    constructor() {}

    createOrfind (obj) {
        console.log('createOrfind...');
        return User.findOrCreate({
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
        return User.findOne({
            where: {
                name: obj.name,
                password: obj.password
            },
            raw: true
        }).then((instance) => {
            console.log(instance);
            return {instance};
        });
    }

}

module.exports = new Server();