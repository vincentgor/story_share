/**
 * Created by vinxent on 2016/5/26.
 */

class Check {

    constructor () {

        this.checkLogin = function* (next) {
            console.log('看看我有没有登录');
            if (this.session.user) {
                console.log('已经登录过了');
            } else {
                console.log('还没有登录');
            }
            yield next;
        }

    }

}

module.exports = new Check();