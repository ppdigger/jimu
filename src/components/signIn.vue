<template>
  <div>
    <form class="" action="index.html" method="post">
      <input type="text" name="" value="">
      <input type="text" name="" value="">
      <input type="submit" name="" value="登录">
    </form>
    <p class="tip">
      没有账号？马上 <a href="#" @click="signToggle('signup')">注册</a>
    </p>
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
