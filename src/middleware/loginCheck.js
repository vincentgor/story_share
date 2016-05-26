/**
 * Created by vinxent on 2016/5/26.
 */

class Check {

    constructor () {

        this.checkOnLine = function* (next) {
            console.log('看看我是否在线');
            if (this.session.user) {
                console.log('在线：可以继续往下走');
                yield next;
            } else {
                console.log('离线：不可以继续往下走');
                this.body = {
                    code: 1,
                    msg: '不好意思，您没有登录'
                };
            }
        };

        this.checkOffLine = function* (next) {
            console.log('看看我是否离线');
            if (!this.session.user) {
                console.log('离线：可以继续往下走');
                yield next;
            } else {
                console.log('在线：不可以继续往下走');
                this.body = {
                    code: 1,
                    msg: '不好意思，您还在线'
                };
            }
        };

    }

}

module.exports = new Check();