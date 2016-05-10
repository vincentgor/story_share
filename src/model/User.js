/**
 * Created by vinxent on 2016/5/8.
 */

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var user = sequelize.define('User', {
        name: {
            type: Sequelize.STRING,
            validate: {
                is: ["[a-z]", 'i'],        // will only allow letters
                max: 23
            },
            field: 'column_name'
        },
        sex: {
            type: Sequelize.STRING,
            field: 'column_sex'
        },
        age: {
            type: Sequelize.INTEGER,
            field: 'column_age'
        }
    }, {

    });
    return user;
};

