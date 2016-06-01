'use strict';

module.exports = function (sequelize, DataTypes) {
    let City = sequelize.define('City', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'code',
            comment: "城市代号"
        }

    }, {
        timestamps: false,
        tableName: 'tbl_city',
        comment: "乘客司机绑定信息仓库"
    });
    return City;
};

