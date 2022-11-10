import Vue from 'vue'
import VueRouter from 'vue-router'
import TestOne from '@/components/pages/001'
import CssTest from '@/components/z-Css&Dom/CssLearn'
import TextLevelCenter from '@/components/z-Css&Dom/文字水平垂直'
import DivLevelCenter from '@/components/z-Css&Dom/div水平垂直'

Vue.use(VueRouter)

// 路由的冗余导航处理
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    redirect: "/one"
  },
  {
    path: '/one',
    name: 'one',
    component: TestOne
  },
  {
    path: '/css',
    name: 'css',
    component: CssTest
  },
  {
    path: '/text',
    name: 'text',
    component: TextLevelCenter
  },
  {
    path: '/div',
    name: 'div',
    component: DivLevelCenter
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
