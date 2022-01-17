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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/test-event',
    name: 'TestEvent',
    component: () => import('../views/TestEvent.vue')
  },
  {
    path: '/test-computed',
    name: 'TestComputed',
    component: () => import('../views/TestComputed.vue')
  },
  {
    path: '/test-condition',
    name: 'TestCondition',
    component: () => import('../views/TestCondition.vue')
  },
  {
    path: '/test-loop',
    name: 'TestLoop',
    component: () => import('../views/TestLoop.vue')
  },
  {
    path: '/test-mixin',
    name: 'TestMixin',
    component: () => import('../views/TestMixin.vue')
  },
  {
    path: '/test-bootstrap',
    name: 'TestBootstrap',
    component: () => import('../views/TestBootstrap.vue')
  },
  {
    path: '/test-comp',
    component: () => import('../views/comp') // 호출되는 파일이 index.vue인 경우에는 파일명을 생략할 수 있다.
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
