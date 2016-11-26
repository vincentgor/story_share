'use strict';

module.exports = function (sequelize, DataTypes) {
    let OrderUser = sequelize.define('Order_User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        userId: {
            type: DataTypes.INTEGER,
            references  : {model: 'tbl_user', key: 'id'},
            onUpdate: 'CASCADE',
            field: 'user_id'
        },
        orderId: {
            type: DataTypes.INTEGER,
            references  : {model: 'tbl_order', key: 'id'},
            onUpdate: 'CASCADE',
            field: 'order_id'
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
        tableName: 'tbl_order_user',

        indexes: [
            {fields: ['user_id', 'order_id'], unique: true},
            {fields: ['order_id', 'user_id'], unique: true}
        ],

        comment: "订单表的乘客信息仓库",

        classMethods: {
            associate: function(models) {
                OrderUser.belongsTo(models.Order, {
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }

    });
    return OrderUser;
};

