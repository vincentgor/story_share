/**
 * Created by vinxent on 2016/5/26.
 */
 
'use strict';

class Foo {

    constructor () {

        /**
         * ### 处理404
         * @param next
         */
        this.dealWith = function* (next) {
            yield  next;
            if (404 != this.status) {
                return;
            }
            switch (this.accepts('html', 'json')) {
                case 'html':
                    this.type = 'html';
                    this.redirect('back', '/404.html');
                    break;
                case 'json':
                    this.type = 'json';
                    this.body = {
                        msg: 'json page not found!'
                    };
                    break;
                default:
                    this.type = 'text';
                    this.body = 'text page not found!';
            }
        }

    }

}

module.exports = new Foo();