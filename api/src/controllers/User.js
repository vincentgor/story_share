/**
 * Created by vinxent on 2016/5/26.
 */
 
'use strict';

const Promise = require('bluebird');

const userService = require('./../service/User');

/**
 *
 */
class User {

    constructor () {

        /**
         * ### 用户登入
         * @param next
         */
        this.login = function* (next){
            this.session.user = '1';
//            this.res.setHeader("Set-Cookie", 'SSID=Ap4GTEq; Expires=Wed, 13-Jan-2021 22:23:01 GMT;HttpOnly ');
            this.body = {
                code: 0,
                msg: '登录成功'
            };

            return;

            let result = yield userService.find({
                name: this.query.name,
                password: this.query.password
            });
            this.type = 'json';
            if (result.instance) {
                // 登录成功
                this.session.user = result.instance;
                this.body = {
                    code: 0,
                    msg: '登录成功'
                };
            } else {
                delete this.session.user;
                this.body = {
                    code: 1,
                    msg: '登录失败'
                };
            }
        };

        /**
         * ### 用户登出
         * @param next
         */
        this.logout = function* (next){

            this.type = 'json';
            if (this.session.user) {
                // 退出
                delete this.session.user;
                this.body = {
                    code: 0,
                    msg: '退出成功'
                };
            } else {
                this.body = {
                    code: 1,
                    msg: '没有登录，何来退出'
                };
            }
        };

        /**
         * ### 用户注册
         * @param next
         */
        this.register = function* (next){
            let result = yield userService.createOrfind({
                name: this.query.name,
                password: this.query.password,
                createTime: Date.now()
            });
            this.type = 'json';
            if (result.created) {
                // 注册成功
                this.body = {
                    code: 0,
                    msg: '注册成功'
                };
            } else {
                this.body = {
                    code: 1,
                    msg: '用户已经存在啦'
                };
            }
        };

        /**
         * ### 更新用户信息
         * @param next
         */
        this.update = function* (next){
            this.body = 'this.update';
        };

        /**
         * ### 用户详情
         * @param next
         */
        this.detail = function* (next){
            this.body = this.session.user;
        };

    }

}

module.exports = new User();