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
    width: 100%;
    height: 90vh;
    .inner{
      vertical-align: middle;
      display: table-cell;
      .logo{
        width: 24%;
        margin: 0 auto;
      }
    }
  }
</style>
