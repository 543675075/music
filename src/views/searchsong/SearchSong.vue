<template>
  <div class="wrap">
    <search-bar class="search-bar"></search-bar>
    <better-scroll class="better-scroll">
      <div class="content">
        <search-song-item v-for="(item,index) in songInfo" :key="item.id">
          <span class="song-name" slot="song-name" @click="play(index)">{{item.name}}</span>
          <span class="singer" slot="singer">{{item.artists[0].name}}</span>
          <span class="album" slot="album">{{item.album.name}}</span>
        </search-song-item>
      </div>
    </better-scroll>
    <aplayer :audio="audio" :lrcType="3" :fixed="true"/>
  </div>
</template>

<script>
  import { searchMusic } from "network/search.js"
  import SearchBar from "components/common/search/SearchBar"
  import SearchSongItem from "./SearchSongItem.vue"
  import BetterScroll from "components/BetterScroll"

  // import "components/common/aplayer/aplay.js"

  import { searchId } from "network/search.js"
  import { text } from "network/search.js"
  import { info } from "network/search.js"

  import Vue from 'vue';
import APlayer from '@moefe/vue-aplayer';

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

  export default {
    name: "SearchSong",
    data() {
      return {
        song: null,
        songInfo: [],
        id: 0,
        info: {},
        isTrue: "false",
        audio: {
        name: '东西（Cover：林俊呈）',
        artist: '纳豆',
        url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
      },
      }
    },
    components: {
      SearchBar,
      SearchSongItem,
      BetterScroll
    },
    
    created() {
      this.song = this.$route.params.id
      searchMusic(this.song).then(res => {
        this.songInfo = res.data.result.songs
      })
    },
    mounted() {
   
    },
    methods: {
      play(index){
        this.id = this.songInfo[index].id
        this.audio.artist = this.songInfo[index].artists[0].name
        console.log(this.id)
        // 获取歌曲地址
        searchId(this.id).then(res=>{
          this.audio.url = res.data.data[0].url
          console.log(this.audio.url)
        })
        // 获取歌词
        text(this.id).then(res=>{
          console.log(res)
          this.audio.lrc = res.data.lrc.lyric
        }).catch(erro=>{
          console.log(erro)
        })
        // 获取歌曲信息
        info(this.id).then(res=>{
          console.log(res)
          this.audio.name = res.data.songs[0].name
          this.audio.cover = res.data.songs[0].al.picUrl
          console.log(this.songInfo)
        })
      }
    },
  }
</script>

<style scoped>
  .wrap {
    position: relative;
    height: 100vh;
  }

  .better-scroll {
    position: absolute;
    top: 54px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .content{
    padding: 20px;
  }
</style>