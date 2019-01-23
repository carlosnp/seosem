import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import marketing from './views/marketing.vue'
import seosem from './views/seosem.vue'
import begin from './components/definitions.vue'

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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: marketing
    },
    {
      path: '/begin',
      name: 'begin',
      component: begin
    },
    {
      path: '/seosem',
      name: 'seosem',
      component: seosem
    }
  ]
})
