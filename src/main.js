// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import {sync} from 'vuex-router-sync'
import 'we-vue/lib/style.css'
import router from './router'
import Tabbar from '@/components/Tabbar'
import Http from './http/http'

console.log(Http)

import wx from 'weixin-js-sdk'

console.log(wx)
//
// wx.config({
//   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//   appId: 'wxd8e3a13cb8a3bbe0', // 必填，公众号的唯一标识
//   timestamp: '', // 必填，生成签名的时间戳
//   nonceStr: '', // 必填，生成签名的随机串
//   signature: '', // 必填，签名，见附录1
//   jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
// })

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
