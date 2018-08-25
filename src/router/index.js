import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 前台页
import index from '../views/showPage/index.vue'
import register from '../views/showPage/register.vue'

export const mainRoutes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/register',
    component: register
  }
]


export default new Router({
  mode: 'hash',
  routes: mainRoutes
})
