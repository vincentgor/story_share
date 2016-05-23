/**
 * Created by vinxent on 2016/5/23.
 */

new Vue({
    el: '#koala',
    data: {
        show: false,
        transitionName: 'fade'
    }
});

Vue.transition('expand', {

    beforeEnter: function (el) {
        el.textContent = 'beforeEnter'
    },
    enter: function (el) {
        el.textContent = 'enter'
    },
    afterEnter: function (el) {
        el.textContent = 'afterEnter'
    },
    enterCancelled: function (el) {
        // handle cancellation
    },

    beforeLeave: function (el) {
        el.textContent = 'beforeLeave'
    },
    leave: function (el) {
        el.textContent = 'leave'
    },
    afterLeave: function (el) {
        el.textContent = 'afterLeave'
    },
    leaveCancelled: function (el) {
        // handle cancellation
    }
})