'use strict';

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            validate: {
                is: ["[a-z]", 'i'],        // will only allow letters
                max: 23
            },
            field: 'column_name'
        },
        sex: {
            type: DataTypes.STRING,
            field: 'column_sex'
        },
        age: {
            type: DataTypes.INTEGER,
            field: 'column_age'
        }
    }, {

    });
    return User;
};

