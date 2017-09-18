<template>
  <div class="sign-up">
    <form class="" onsubmit="return false">
      <input type="text" name="" value="" placeholder="昵称" v-model="name">
      <input type="text" name="" value="" placeholder="请输入邮箱地址" v-model="email">
      <input type="password" name="" value="" placeholder="请输入密码" v-model="password">
      <input type="submit" name="" value="注册" @click="signup({email, password, name, avatar})">
      <p class="tip">
        已有账号？现在 <a href="#" @click="signToggle('signin')">登录</a>
      </p>
    </form>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data: function(){
      return {
        email: '',
        password: '',
        name: ''
      }
    },
    methods:{
      ...mapActions({
        signToggle: 'signToggle',
        signup: 'signUp'
      })
    }
  }
</script>

<style lang="less" scoped>
@import '../../static/css/common.less';
  .tip{
    text-align: center;
  }
</style>
