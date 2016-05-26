/**
 * Created by vinxent on 2016/5/26.
 */

class Check {

    constructor () {

        this.checkLogin = function* (next) {
            console.log('看看我有没有登录');
            yield next;
        }

    }

}

module.exports = new Check();