{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import axios from 'axios'
import Quasar from 'Quasar'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import App from './App'
{{#router}}
import router from './router'
{{/router}}
import store from './store'

axios.interceptors.response.use((response) => {
  // Do something with response data
  if (response.status === 200 && response.data.err_code !== 0) {
    // 全局请求拦截报错处理
    // response.data.err_msg && Quasar.plugins.Dialog.create({message: response.data.err_msg})
  }
  return response
}, (error) => {
  if (error.response.status === 401) {
    // todo 401 处理，比如跳去 SSO 登录
  } else if (error.response.status === 403) {
  } else {
    Quasar.plugins.Dialog.create({message: `网络有点小问题(${error.response.status})`})
  }
  // Do something with response error
  return Promise.reject(error)
})

Vue.config.productionTip = false

Quasar.i18n.set(Quasar.i18n.zhHans)
Quasar.plugins.Notify.setDefaults({
  type: 'positive',
  timeout: 1500,
  position: 'top',
})

Vue.use(Quasar)

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  store,
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
