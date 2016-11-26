
var User = {
  template: '<div class="user">' +
      '<h2>User {{ $route.params.id }}</h2>' +
      '<router-view></router-view>' +
    '</div>'

}

var UserHome = { template: '<div>Home</div>' }
var UserProfile = { template: '<div>Profile</div>' }
var UserPosts = { template: '<div>Posts</div>' }


var routes = [
    // 动态路径参数 以冒号开头
      { 
        path: '/user/:id', 
        component: User,
        children: [
          {
            path: '',
            component: UserHome
          },
          {
            path: 'profile',
            component: UserProfile
          },
          {
            path: 'post',
            component: UserPosts
          },
          
        ]
      }
  ]

var router = new VueRouter({
    // mode: 'history',
    routes:routes
})

var app = new Vue({
  router:router
}).$mount('#app');

var app_ = new Vue({
  data: {
    datelist: [
      {time: 'March 2014'},
      {time: 'February 2014'},
      {time: 'January 2014'},
      {time: 'December 2013'},
      {time: 'November 2013'},
      {time: 'October 2013'},
      {time: 'September 2013'},
      {time: 'August 2013'},
      {time: 'July 2013'},
      {time: 'June 2013'},
      {time: 'May 2013'},
      {time: 'April 2013'}
    ]
  }
}).$mount('#datelist');