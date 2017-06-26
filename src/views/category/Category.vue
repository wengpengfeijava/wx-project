<template>
  <div>

    fenlei

{{navTabDirection}}
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
    },
    computed: {
      navTabDirection () {
        return this.$store.state.navTabDirection
      }
    }
  }
</script>

<style scoped>


</style>
