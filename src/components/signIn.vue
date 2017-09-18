<template>
  <div class="sign-in">
    <form class="" onsubmit="return false">
      <input type="text" name="" value="" placeholder="请输入邮箱地址" v-model="email">
      <input type="text" name="" value="" placeholder="请输入密码" v-model="password">
      <input type="submit" name="" value="登录" @click="signin({email, password})">
    </form>
    <p class="tip">
      没有账号？马上 <a href="#" @click="signToggle('signup')">注册</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data: function(){
      return {
        email: '',
        password: ''
      }
    },
    methods:{
      ...mapActions({
        signToggle: 'signToggle',
        signin: 'signIn'
      })
    }
  }
</script>

<style lang="less" scoped>
  form{
    input{
      width: 100%;
      outline: none;
    }
  }
  .tip{
    text-align: center;
  }
</style>
