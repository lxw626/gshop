<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqFoodCategorys} from './api'
  import {mapActions} from 'vuex'


export default {
    async mounted(){
      // const result = await reqFoodCategorys()
      // console.log(result)
      // this.$store.dispatch("getAddress")
      this.getAddress()
      this.getUserInfo()
    },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  },
    components:{
      FooterGuide
    }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width: 100%;
    height: 100%;
    background: #f5f5f5;
</style>
