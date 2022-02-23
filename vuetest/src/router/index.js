import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import FunRealize from '@/components/FunRealize'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/FunRealize',
      name: 'FunRealize',
      component: FunRealize
    }
  ]
})
