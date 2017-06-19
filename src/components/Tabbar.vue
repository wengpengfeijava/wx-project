<template>
  <wv-tabbar>
    <wv-tabbar-item to="/" is-on>
      <span slot="icon" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" slot="icon">
        <!--<wv-badge style="position: absolute;top: -2px;right: -13px;">8</wv-badge>-->
      </span>
      首页

    </wv-tabbar-item>
    <wv-tabbar-item to="/category">
      <img class="weui-tabbar__icon" slot="icon"> 分类

    </wv-tabbar-item>
    <wv-tabbar-item to="/myCourse">
      <span slot="icon" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" slot="icon">
        <!--<wv-badge is-dot style="position: absolute;top: 0;right: -6px;">8</wv-badge>-->
      </span>
      我的课程

    </wv-tabbar-item>
    <wv-tabbar-item to="/profile">
      <img class="weui-tabbar__icon" slot="icon"> 我的
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
    }
  }
</script>
