import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'

import App from './App.vue'

import 'highlight.js/styles/github.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import router from './router'

Vue.use(BootstrapVue)

Vue.config.productionTip = false
store.dispatch('loadContest', "https://gist.githubusercontent.com/Aleksey-Danchin/2d2287db2b10e6412d40edc9449027ea/raw/contest.json")

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
