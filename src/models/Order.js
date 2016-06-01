'use strict';

module.exports = function (sequelize, DataTypes) {
    let Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        originatorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'originator_id',
            comment: "发起人id"
        },
        driverId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'driver_id',
            references  : {model: 'tbl_driver', key: 'id'},
            comment: "司机id"
        },
        status: {
            type: DataTypes.ENUM,
            values: ['unfinished', 'deleted', 'completed', 'other'],
            defaultValue: 'unfinished',
            field: 'status',
            comment: "订单状态"
        },
        cityOriginCode: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'city_origin_code',
            references  : {model: 'tbl_city', key: 'code'},
            comment: "出发城市代号"
        },
        cityDestinationCode: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'city_destination_code',
            references  : {model: 'tbl_city', key: 'code'},
            comment: "目的城市代号"
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'origin',
            comment: "出发地"
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'destination',
            comment: "目的地"
        },
        maxPerson: {
            type: DataTypes.INTEGER,
            field: 'max_person',
            comment: "最大人数"
        },
        currentPerson: {
            type: DataTypes.INTEGER,
            field: 'current_person',
            defaultValue: 0,
            comment: "目前人数"
        },
        prize: {
            type: DataTypes.INTEGER,
            field: 'prize',
            comment: "人均价格"
        },
        createTime: {
            type: DataTypes.BIGINT,
            field: 'create_time',
            comment: "创建时间"
        },
        updateTime: {
            type: DataTypes.BIGINT,
            field: 'update_time',
            comment: "更新时间"
        },
        deleteTime: {
            type: DataTypes.BIGINT,
            field: 'delete_time',
            comment: "删除时间"
        },
        completeTime: {
            type: DataTypes.BIGINT,
            field: 'complete_time',
            comment: "完成时间"
        }

    }, {
        timestamps: false,
        tableName: 'tbl_order',
        comment: "用户信息仓库",

        classMethods: {
            associate: function(models) {
                Order.hasMany(models.Order_User)
            }
        }

    });
    return Order;
};

