<template>
  <div>

    fenlei


    <button @click="show=!show">show</button>
    <transition name="outLeftInRight">
      <p v-show="show" class="test">hello</p>
    </transition>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>


</style>
