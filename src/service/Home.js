'use strict';

var Promise = require('bluebird');

var dB = require('./../model');

class Server {
    constructor() {

    }

    create(obj) {
        return dB.Home.create(obj).get('dataValues').tap(console.log);
    }
}

module.exports = new Server();


