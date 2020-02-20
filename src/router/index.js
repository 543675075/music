import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import SearchSong from "views/searchsong/SearchSong"
import Home from "views/home/Home"
import Player from "views/audio/Audio"

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/searchsong/:id",
      component: SearchSong
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/player",
      component: Player
    }
  ],
  mode: "history"
})


export default router