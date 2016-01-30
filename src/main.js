import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './components/App.vue'
import NewsView from './components/NewsView.vue'
import ItemView from './components/ItemView.vue'
import UserView from './components/UserView.vue'
import LoginView from './components/LoginView.vue'

Vue.config.debug = true


// install router
Vue.use(Router)
// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({
  '/news/:page': {
    component: NewsView
  },
  '/user/:id': {
    component: UserView
  },
  '/item/:id': {
    component: ItemView
  },
  '/login': {
    component: LoginView
  }
})

router.beforeEach(function () {
  // 登录控制
  // if (!isLogin()){
  //   router.go('/login')
  // }
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/news/1'
})
// 为 组件 APP 绑定路由
router.start(App, '#app')


