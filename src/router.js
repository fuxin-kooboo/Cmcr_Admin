import Vue from 'vue'
import Hello from './views/Hello.vue'
import Checkout from './views/Checkout'
import NoFound from './views/NoFound'
import Router from 'vue-router'
Vue.use(Router)
//使滚动条回到头部
const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    if (to.meta.scrollToTop) {
      return { x: 0, y: 0 }
    }
  }
}
const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/checkout'
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/404',
      name: 'no-found',
      component: NoFound
    },
    {
      path: '*',
      redirect: { name: 'no-found' }
    }
  ]
})


export default router