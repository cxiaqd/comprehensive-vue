import Vue from 'vue'
import VueRouter from 'vue-router'
import TestOne from '@/components/pages/001'
import CssTest from '@/components/z-Css&Dom/CssLearn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/one',
    name: 'home',
    component: TestOne
  },
  {
    path: '/css',
    name: 'css',
    component: CssTest
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
