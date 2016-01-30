import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App   from './components/App.vue'
import Index from './components/Index.vue'


import Admin     from './components/admin/Admin.vue'
import NewsView  from './components/admin/NewsView.vue'
import ItemView  from './components/admin/ItemView.vue'
import UserView  from './components/admin/UserView.vue'
import LoginView from './components/admin/LoginView.vue'
import user from './store/user.js'

Vue.config.debug = true


// install router
Vue.use(Router)
// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({
  '/admin': {
    component:Admin,
    subRoutes: {
      '/login': {
        component: LoginView
      },
      '/': {
        component: LoginView
      },
      '/news/:page': {
        component: NewsView
      },
      '/news/:page': {
        component: NewsView
      },
      '/user/:id': {
        component: UserView
      },
      '/item/:id': {
        component: ItemView
      }
    }
  },
  '/' : {
    component:Index,
      subRoutes: {
    }
  }
})

router.beforeEach(function () {
  // 登录控制
  if (!user.isLogin()){
    router.go('/admin/login')
  }
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})
// 为 组件 APP 绑定路由
router.start(App, '#app')


