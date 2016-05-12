'use strict';

module.exports = function (router) {

    require('./src/routes/Home')(router);
    require('./src/routes/User')(router);

};




