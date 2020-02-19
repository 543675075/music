<template>
  <div class="song">
    <search-bar></search-bar>
    <div class="song-list">
      <div class="song-item">
        <span class="song-name">嚣张</span>
        <span>周杰伦·叶惠美</span>
      </div>
      <div class="song-more">
        <img src="~assets/img/song/mv.png" alt="">
        <img src="~assets/img/song/sandian.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import { searchMusic } from "network/search.js"
  import SearchBar from "components/common/search/SearchBar"

  export default {
    name: "SearchSong",
    data() {
      return {
        songInfo: null
      }
    },
    components: {
      SearchBar
    },
    created() {
      this.songInfo =this.$route.params.id
      searchMusic(this.songInfo).then(res => {
        console.log(res)
      })
    },
    methods: {

    },
  }
</script>

<style scoped>
  .song{
    height: 100vh;
    background-color: #FAFAFA;
    padding: 0 .625rem;
  }
  .song-list{
    width: 80vw;
    height: 3.75rem;
  }
</style>