'use strict';

var Promise = require('bluebird');

var dB = require('./../models');

class Server {
    constructor() {

    }

    create(obj) {
        console.log('create...');
        return dB.User.create(obj);//.get('dataValues').tap(console.log);
    }
}

module.exports = new Server();