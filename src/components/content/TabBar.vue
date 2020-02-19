<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">音乐馆</van-tabbar-item>
    <van-tabbar-item icon="search">推荐</van-tabbar-item>
    <van-tabbar-item icon="friends-o">动态</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import Vue from 'vue';
  import { Tabbar, TabbarItem } from 'vant';

  Vue.use(Tabbar);
  Vue.use(TabbarItem);
  export default {
    name: "TaBBar",
    data() {
      return {
        active: 0
      }
    }

  }
</script>