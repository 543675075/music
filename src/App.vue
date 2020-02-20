<template>
  <div id="app">
    <router-view></router-view>
    
    <tab-bar></tab-bar>
  </div>
</template>


<script>
  import TabBar from "components/content/TabBar.vue"

  export default {
    name: "App",

    components: {
      TabBar,
      
    }
  }


</script>



<style lang="less">
@import url(assets/css/base.css);


</style>
