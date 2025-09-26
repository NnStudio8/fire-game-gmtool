import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/charge',
      component: () => import('@/pages/charge/index.vue'),
    },
    {
      path: '/register',
      component: () => import('@/pages/register/index.vue'),
    },
    {
      path: '/diamond',
      component: () => import('@/pages/diamond/index.vue'),
    },
    {
      path: '/addgold',
      component: () => import('@/pages/addgold/index.vue'),
    },
    {
      path: '/stamina',
      component: () => import('@/pages/stamina/index.vue'),
    },
    {
      path: '/additem',
      component: () => import('@/pages/additem/index.vue'),
    },
    {
      path: '/passlevel',
      component: () => import('@/pages/passlevel/index.vue'),
    },
    {
      path: '/setlevel',
      component: () => import('@/pages/setlevel/index.vue'),
    },
    {
      path: '/settime',
      component: () => import('@/pages/settime/index.vue'),
    },
    {
      path: '/gmtext',
      component: () => import('@/pages/gmtext/index.vue'),
    },

    {
      path: '/',
      redirect: '/charge',
    },
  ],
})
