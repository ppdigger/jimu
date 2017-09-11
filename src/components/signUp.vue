<template>
  <div>
    <form class="" action="index.html" method="post">
      <input type="text" name="" value="">
      <input type="password" name="" value="">
      <input type="submit" name="" value="注册">
      <p class="tip">
        已有账号？现在 <a href="#" @click="signToggle('signin')">登录</a>
      </p>
    </form>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {

    methods:{
      ...mapActions({
        signToggle: 'signToggle'
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
