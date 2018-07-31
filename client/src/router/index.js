import Vue from 'vue'
import Router from 'vue-router'
import RootPage from '@/components/Main'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: 'root'
  }, {
    path: '/root',
    name: 'root',
    component: RootPage
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/songs',
    name: 'songs',
    component: Songs
  }, {
    path: '/songs/create',
    name: 'create-songs',
    component: CreateSong
  }]
})