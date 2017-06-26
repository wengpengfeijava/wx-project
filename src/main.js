// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import 'we-vue/lib/style.css'
import router from './router'
import Tabbar from '@/components/Tabbar'

sync(store, router)

Vue.config.productionTip = false

Vue.component('Tabbar', Tabbar)

/* eslint-disable no-new */
//
// new Vue({
//   el: '#app',
//   router,
//   Store,
//   template: '<App/>',
//   components: {App}
// })

new Vue(Vue.util.extend({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
}))
