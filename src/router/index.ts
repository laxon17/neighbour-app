import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/authentication/RegisterView.vue'
import LoginView from '@/views/authentication/LoginView.vue'

import View from '@/views/dashboard/View.vue'
import Orders from '@/views/dashboard/Orders.vue'
import Create from '@/views/dashboard/Create.vue'
import Index from '@/views/dashboard/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresGuest: true
    },
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requiresGuest: true
    },
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      requiresGuest: true
    },
    component: RegisterView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'workshop',
        name: 'workshop',
        component: Create
      },
      {
        path: 'orders',
        name: 'orders',
        component: Orders
      },
      {
        path: '',
        name: 'index',
        component: Index
      }
    ],
    component: View
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token')

  if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login')
  }
  next()

  if(to.matched.some(record => record.meta.requiresGuest) && loggedIn) {
    next('/dashboard')
  }
  next()
})

export default router
