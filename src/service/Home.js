'use strict';

const Promise = require('bluebird');

const dB = require('./../models');

class Server {
    constructor() {

    }

    create(obj) {
        return dB.Home.create(obj).get('dataValues').tap(console.log);
    }
}

module.exports = new Server();


