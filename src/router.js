import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import sem from './views/sem.vue'
import seo from './views/seo.vue'
import marketing from './views/marketing.vue'
import seosem from './views/seosem.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/seo',
      name: 'seo',
      component: seo
    },
    {
      path: '/sem',
      name: 'sem',
      component: sem
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: marketing
    },
    {
      path: '/seosem',
      name: 'seosem',
      component: seosem
    },
  ]
})
