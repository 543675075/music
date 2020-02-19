<template>
  <form action="/">
    <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel"/>
  </form>
</template>
<script>
  import Vue from 'vue';
  import { Search } from 'vant'


  Vue.use(Search)
  export default {
    name: "SearchBar",
    data() {
      return {
        value: ""
      }
    },
    methods: {
      onSearch(val){
        this.$router.push("/searchsong/"+val)
       
      },
     
      onCancel(val){
        console.log("取消")
      }
    },
  }
</script>

<style scoped>

</style>