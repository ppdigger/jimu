<template lang="html">
  <div class="">
    {{token}}
    <a @click="signout">退出登录</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  methods:{
    ...mapActions({
      signout: 'signOut',
    })
  }
}
</script>

<style lang="less">
</style>
