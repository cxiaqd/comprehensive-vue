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
import A from '@/components/keepAlive/A'
import B from '@/components/keepAlive/B'
import C from '@/components/keepAlive/C'
import mixinTest from '@/components/testVue/mixin'
import syncChild from '@/components/testVue/sync.child'
import syncFather from '@/components/testVue/sync.father'
import syncTest from '@/components/testVue/syncTest'
import filters from '@/components/testVue/filters'

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
  {
    path: '/a',
    name: 'a',
    component: A,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/b',
    name: 'b',
    component: B,
    meta: {
      keepAlive: false // 需要被缓存
    }
  },
  {
    path: '/c',
    name: 'c',
    component: C,
    meta: {
      keepAlive: false // 需要被缓存
    }
  },
  {
    path: '/mixinTest',
    name: 'mixinTest',
    component: mixinTest,
  },
  {
    path: '/syncChild',
    name: 'syncChild',
    component: syncChild,
  },
  {
    path: '/syncFather',
    name: 'syncFather',
    component: syncFather,
  },
  {
    path: '/syncTest',
    name: 'syncTest',
    component: syncTest,
  },
  {
    path: '/filters',
    name: 'filters',
    component: filters,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
