import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('./views/Movies.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
})

export default router
