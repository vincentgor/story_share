'use strict';

var config = require('config');
var mysqlConfig = config.mysql;
var Sequelize = require('sequelize');
var sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var User = require('./User')(sequelize);
var Home = require('./Home')(sequelize);

var dB = {
    User: User,
    Home: Home,
    sequelize: sequelize,
    Sequelize: Sequelize
};

module.exports = dB;

sequelize.sync().then(()=>{
    console.log('数据表初始化完成');
});

//sequelize.sync().then(function() {
//    return UUser.create({
//        name: 'haha',
//        sex: '男',
//        age: 21
//    });
//}).get('dataValues').then(console.log);
