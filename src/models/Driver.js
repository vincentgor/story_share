'use strict';

module.exports = function (sequelize, DataTypes) {
    let Driver = sequelize.define('Driver', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
            comment: "名字"
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password',
            comment: "密码"
        },
        sex: {
            type: DataTypes.ENUM,
            values: ['man', 'woman', 'other'],
            field: 'sex',
            defaultValue: 'other',
            comment: "性别"
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED,
            field: 'age',
            comment: "年龄"
        },
        status: {
            type: DataTypes.ENUM,
            values: ['normal', 'blacklist', 'other'],
            defaultValue: 'normal',
            field: 'status',
            comment: "用户状态"
        },
        mail: {
            type: DataTypes.STRING,
            field: 'mail',
            comment: "邮箱"
        },
        phone: {
            type: DataTypes.STRING,
            field: 'phone',
            comment: "手机号码"
        },
        createTime: {
            type: DataTypes.BIGINT,
            field: 'create_time',
            comment: "创建时间"
        },
        update_time: {
            type: DataTypes.BIGINT,
            field: 'update_time',
            comment: "更新时间"
        },
        delete_time: {
            type: DataTypes.BIGINT,
            field: 'delete_time',
            comment: "删除时间"
        }

    }, {
        timestamps: false,
        tableName: 'tbl_driver',
        comment: "司机信息仓库"
    });
    return Driver;
};

