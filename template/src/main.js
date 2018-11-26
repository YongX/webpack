{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
{{#if_eq platform "desktop"}}
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
{{/if_eq}}


Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})

if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
  // for vue devtools
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor
}
