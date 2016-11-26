'use strict';

module.exports = function (sequelize, DataTypes) {
    let UserDriver = sequelize.define('User-Driver', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {model: 'tbl_user', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            field: 'user_id'
        },
        driverId: {
            type: DataTypes.INTEGER,
            references: {model: 'tbl_driver', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            field: 'driver_id'
        },
        createTime: {
            type: DataTypes.BIGINT,
            field: 'create_time',
            comment: "创建时间"
        },
        delete_time: {
            type: DataTypes.BIGINT,
            field: 'delete_time',
            comment: "删除时间"
        }

    }, {
        timestamps: false,
        tableName: 'tbl_user_driver',
        comment: "乘客司机绑定信息仓库"
    });
    return UserDriver;
};

