<template>
  <div id="app">
    <!--{{navTabDirection}}-->
    <transition :name="routerAnimateCss" mode="out-in">
      <router-view class="test"></router-view>
    </transition>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      routerAnimateCss () {
        return this.$store.state.routerAnimateCss
      }
    }
  }
</script>

<style>

  .test {
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
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

  .animations-reverse-enter {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  .animations-reverse-leave, .animations-reverse-leave-active {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
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
