<template>
  <wv-tabbar>
    <wv-tabbar-item to="/" is-on>
      <span slot="icon" @click="clickItem(1)" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" slot="icon">
      </span>
      首页




    </wv-tabbar-item>
    <wv-tabbar-item to="/category">
      <img class="weui-tabbar__icon" @click="clickItem(2)" slot="icon"> 分类




    </wv-tabbar-item>
    <wv-tabbar-item to="/myCourse">
      <span slot="icon" @click="clickItem(3)" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" slot="icon">
      </span>
      我的课程




    </wv-tabbar-item>
    <wv-tabbar-item to="/profile">
      <img @click="clickItem(4)" class="weui-tabbar__icon" slot="icon"> 我的




    </wv-tabbar-item>
  </wv-tabbar>
</template>

<style>
</style>

<script>
  import WeVue from 'we-vue'
  const components = {
    [WeVue.Tabbar.name]: WeVue.Tabbar,
    [WeVue.TabbarItem.name]: WeVue.TabbarItem
  }
  export default {
    name: 'Tabbar',
    components: components,
    data () {
      return {}
    },
    methods: {
      clickItem: function (tabIndex) {
        this.$store.dispatch('changeNav', false)
      }
    }
  }
</script>
