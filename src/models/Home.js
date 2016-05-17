'use strict';

module.exports = function (sequelize, DataTypes) {
    var Home = sequelize.define('Home', {
        city: {
            type: DataTypes.STRING,
            validate: {
                is: ["[a-z]", 'i'],        // will only allow letters
                max: 23
            },
            field: 'column_city'
        },
        street: {
            type: DataTypes.STRING,
            field: 'column_street'
        },
        number: {
            type: DataTypes.INTEGER,
            field: 'column_number'
        }
    }, {

    });
    return Home;
};

