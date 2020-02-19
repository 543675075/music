import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import SearchSong from "views/searchsong/SearchSong"
import Home from "views/home/Home"

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
    }
  ],
  mode: "history"
})


export default router