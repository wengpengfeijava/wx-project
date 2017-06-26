<template>
  <div id="app">
    <!--{{navTabDirection}}-->
    <transition name="animations" mode="out-in">
      <router-view class="test"></router-view>
    </transition>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      navTabDirection () {
        return this.$store.state.navTabDirection
      }
    }
  }
</script>

<style>

  .test {
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }

  .animations-enter {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
  }

  .animations-leave, .animations-leave-active {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  #app {
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
