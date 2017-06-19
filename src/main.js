// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'we-vue/lib/style.css'
import router from './router'
import Tabbar from '@/components/Tabbar'
console.log(Tabbar)
Vue.config.productionTip = false
Vue.component('Tabbar', Tabbar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
