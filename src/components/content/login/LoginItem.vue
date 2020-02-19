<template>
  <div class="login-list">
    <input type="text" name="user" placeholder="输入用户名\账号\邮箱">
    <input type="password" name="pw" placeholder="密码">
    <div class="option">
      <label>
        <input type="checkbox" name="checkbox">
        记住密码
      </label>
      <span>忘记密码</span>
    </div>
    <input type="button" value="登陆" class="user-login">
    <input type="button" value="注册" class="register">
  </div>
</template>

<script>
export default {
  name: "LoginItem"
}
</script>


<style scoped>
  .login-list{
    margin: 6.25rem auto 0 auto;
    display: flex;
    flex-direction: column;
    width: 80vw;
  }
  input[type="text"],input[type="password"]{
    height: .9375rem;
    /* text-indent: 1.875rem; */
    border-radius: 20px;
    text-indent: 1.25rem;
    color: #fff;
    margin-bottom: .625rem;
    border: 1px solid #ccc;
    background: transparent;
  }
  .option{
    padding: 0 .625rem;
    height: .9375rem;
    display: flex;
    justify-content: space-between;
    color: #fff;
  }
  input[type="checkbox"]{
    vertical-align: middle;
  }
  input[type="button"]{
    width: 70vw;
    height: .9375rem;
    color: #fff;
    font-size: .5rem;
    margin: .3125rem auto 0 auto;
    border-radius: 20px;
    border: none;
  }
  .register{
    background-color: #00a0e9;
  }
  .user-login{
    background-color: #00eda2;
  }
</style>