/**
 * Created by vinxent on 2016/5/23.
 */

var Foo = Vue.extend({
    template:
        '<div class="foo">' +
        '<p>This is Foo!</p>' +
        '<router-view></router-view>' + // <- 嵌套的外链
        '</div>'
});

var Baz = Vue.extend({
    template:  '<p>This is Baz!</p>'
});

var Bar = Vue.extend({
    template:  '<p>This is Bar!</p>'
});

var router = new VueRouter({
    root: '/foo'
});



router.map({

    '/user/:userId': {
        name: 'user',
        component: {
            template: '<p>shabi</p>'
        }
    }

//    '/foo': {
//        component: Foo,
//        subRoutes: {
//            '/': {
//                component: {
//                    template: '<p>Default sub view for Foo</p>'
//                }
//            },
//            '/user/:username': {
//                component: {
//                    template: '<p>用户名是{{$route.params.username}}</p>'
//                }
//            },
//            '/bar': {
//                component: Bar
//            }
//        }
//    }
});

//router.beforeEach((transition) => {
//    return transition;
////    if (transition.to.auth) {
////        console.log('需要授权');
////    } else {
////        console.log('不需要授权');
////    }
//});

router.go({ name: 'user', params: { userId: 123 }});

var App = Vue.extend({});

router.start(App, '#app');