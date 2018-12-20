import Vue from 'vue'
import Router from 'VueRouter'
import Home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  {{#routerConfig}}
  // allow async-await
  mode: 'history',
  {{/routerConfig}}
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
