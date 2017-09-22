<template lang="html">
  <div class="">
    {{token}}
    <a @click="pp">退出登录</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
export default {
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  methods:{
    ...mapActions({
      signout: 'signOut',
    }),
    pp: function(){
      Vue.axios.post('http://localhost:3000/api/info')
        .then(response => {
          let signin = response.data
          console.log(signin);
        })
    }
  }
}
</script>

<style lang="less">
</style>
