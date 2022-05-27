import * as Router from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/recursion',
    name: 'recursion',
    component: () => import('../views/recursion.vue')
  },
  {
    path: '/componentIs',
    name: 'componentIs',
    component: () => import('../views/componentIs/index.vue')
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('../views/ref.vue')
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('../views/reactive.vue')
  },
  {
    path: '/HookFunction',
    name: 'HookFunction',
    component: () => import('../views/HookFunction.vue')
  },
  {
    path: '/countdown',
    name: 'countdown',
    component: () => import('../views/countdown.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('../views/watch.vue')
  }
]

const router = Router.createRouter({
  history: Router.createWebHashHistory(),
  routes,
})

export default router