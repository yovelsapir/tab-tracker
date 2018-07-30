import Vue from 'vue'
import Router from 'vue-router'
import RootPage from '@/components/Main'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'root',
      component: RootPage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})