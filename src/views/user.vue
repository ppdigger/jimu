<template lang="html">
  <div class="box">
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="signToggle">

      </component>
  </transition>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import signin from '../components/signIn.vue'
  import signup from '../components/signUp.vue'
export default {
  computed: mapGetters({
    signToggle: 'signToggle'
  }),
  components: {
    signin,
    signup
  }
}
</script>

<style lang="less" scoped>
  .box{
    display: table;
    height: 90vh;
  }
</style>
<style lang="less">
@import '../../static/css/common.less';
  .box{
    width: 100%;
    .inner{
      vertical-align: middle;
      display: table-cell;
      .logo{
        width: 24%;
        margin: 0 auto;
      }
    }
    .sign-in,
    .sign-up{
      display: table-cell;
      vertical-align: middle;
      padding: 0 10%;
    }
    input{
      padding: 0 1em;
      width: 100%;
      font-size: 0.14rem;
      line-height: 2.2em;
      background: #eae6e1;
      margin: 0.06rem 0;
      .radius(4px);
    }
    input[type="submit"],
    button{
      margin-top: 0.16rem;
      color: #fff;
      background: #e62117;
    }
  }
</style>
