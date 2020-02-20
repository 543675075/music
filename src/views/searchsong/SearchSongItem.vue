<template>
  <div class="song-list">
    <div class="song-item">
      <slot name="song-name" class="song-name"></slot>
      <div class="inner">
        <slot name="singer" class="singer"></slot>
        <i>·</i>
        <slot name="album" class="album"></slot>
      </div>
    </div>
    <div class="song-more">
      <img src="~assets/img/song/mv.png" alt="">
      <img src="~assets/img/song/sandian.png" alt="">
    </div>
  </div>
</template>

<script>



  export default {
    name: "SearchSongItem",
    data() {
      return {
        url: ""
      }
    },
    props: {
      id: {
        type: Number
      }
    },

    methods: {
     
    },
  }
</script>

<style scoped>
  .song-list {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    overflow: hidden;
  }

  .song-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .song-name {
    font-size: 16px;
    font-weight: 600;
  }

  i {
    font-size: 12px;
    padding: 0 10px;
  }

  .album {
    color: #9C9C9C;
    font-size: 12px;
  }

  .song-more img {
    width: 20px;
    margin-left: 10px;
  }
  .singer{
    font-size: 12px;
  }
  .inner{
    height: 16px;
  }
</style>