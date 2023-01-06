import Vue from 'vue'
import VueRouter from 'vue-router'
import TestOne from '@/components/pages/001'
import CssTest from '@/components/z-Css&Dom/CssLearn'
import TextLevelCenter from '@/components/z-Css&Dom/文字水平垂直'
import DivLevelCenter from '@/components/z-Css&Dom/div水平垂直'
import VueWatch from '@/components/testVue/01-watch'
import VueAttrs from '@/components/testVue/02-透传'
import VueSlot from '@/components/testVue/03-slotFather'
import IsComponent from '@/components/testVue/isComponent'
import elTest from '@/components/element/elAutocomplete'
import elDataPicker from '@/components/element/elDataPicker'
import elDialog from '@/components/element/elDialog'
import elContainer from '@/components/element/elContainer'
import GrailLayout from '@/components/commons/grailLayout'

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
  {
    path: '/watch',
    name: 'watch',
    component: VueWatch
  },
  {
    path: '/attrs',
    name: 'attrs',
    component: VueAttrs
  },
  {
    path: '/slot',
    name: 'slot',
    component: VueSlot
  },
  {
    path: '/isComponent',
    name: 'isComponent',
    component: IsComponent
  },
  {
    path: '/el',
    name: 'el',
    component: elTest
  },
  {
    path: '/elDataPicker',
    name: 'elDataPicker',
    component: elDataPicker
  },
  {
    path: '/elDialog',
    name: 'elDialog',
    component: elDialog
  },
  {
    path: '/elContainer',
    name: 'elContainer',
    component: elContainer
  },
  {
    path: '/grailLayout',
    name: 'grailLayout',
    component: GrailLayout
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
