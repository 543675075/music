<template>
  <div class="login">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>
  .login {
    height: 100vh;
    background: url(~assets/img/login/bgc.jpg);
    overflow: hidden;
  }
  
</style>