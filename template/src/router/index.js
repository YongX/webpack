import Vue from 'vue'
import Router from 'VueRouter'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  {{#routerConfig}}
  // allow async-await
  mode: 'history',
  {{/routerConfig}}
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
