<template>
  <div id="app">
    <!--<transition name="fade" mode="out-in">-->
      <router-view class="animated"></router-view>
    <!--</transition>-->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  .animated {
    animation-duration: .2s;
    animation-fill-mode: both;
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  .fade-leave-active {

  }

  .fade-enter-active {
    -webkit-animation-name: fadeInRight;
    -moz-animation-name: fadeInRight;
    -o-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }

  .fade-enter, .fade-leave-to {
  }

  #app {
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
