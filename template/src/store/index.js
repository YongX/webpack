import Vue from 'vue'
import Vuex from 'vuex'
import root from './modules/root'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// 如果要使用 chrome 的 devtools 插件，必须把下面的配置放到 new store 之前
Vue.config.devtools = debug

export default new Vuex.Store({
  modules: {
    root,
  },
  strict: debug,
})
