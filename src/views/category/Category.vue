<template>
  <div>

    fenlei


    <wv-actionsheet type="ios" :actions="actions" cancel-text="取消" v-model="sheetVisible"></wv-actionsheet>

    <button @click="sheetVisible=!sheetVisible">show</button>
    <transition name="outLeftInRight">
      <p v-show="show" class="test">hello</p>
    </transition>
  </div>
</template>


<script>
  import WeVue from 'we-vue'
  const components = {
    [WeVue.Actionsheet.name]: WeVue.Actionsheet
  }
  //  Vue.component(ActionSheet.name, ActionSheet)
  export default {
    components: components,
    data () {
      return {
        show: false,
        actions: [{
          id: '123',
          name: '你是真的屁'
        }],
        sheetVisible: false
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
