<template>
  <div class="wrapper">

      <slot></slot>

  </div>
</template>

<script>

  import BScroll from "better-scroll"
  export default {
    name: "BetterScroll",
    data() {
      return {
        scroll:null,
      }
    },
    props:{
      pullUpLoad:{
        type: Boolean,
        default: false
      },
      proBeType:{
        type: Number,
        default: 0
      }

    },
    mounted() {
      this.scroll = new BScroll(".wrapper",{
        pullUpLoad: this.pullUpLoad,
        click: true,
        proBeType: this.proBeType
      })
    },


  }
   
</script>