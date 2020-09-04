import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters',
    name: 'Сharacter',

    component: () => import('../views/Сharacter.vue')
  },
  {
    path: '/locations',
    name: 'Locations',

    component: () => import('../views/Locations.vue')
  },
  {
    path: '/episodes',
    name: 'Episodes',

    component: () => import('../views/Episodes.vue')
  },
  {
    path: '**',
    component: ()=> import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
