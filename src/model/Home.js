'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var home = sequelize.define('Home', {
        city: {
            type: Sequelize.STRING,
            validate: {
                is: ["[a-z]", 'i'],        // will only allow letters
                max: 23
            },
            field: 'column_city'
        },
        street: {
            type: Sequelize.STRING,
            field: 'column_street'
        },
        number: {
            type: Sequelize.INTEGER,
            field: 'column_number'
        }
    }, {

    });
    return home;
};

