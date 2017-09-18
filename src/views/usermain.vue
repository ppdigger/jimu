<template lang="html">
  <div class="">
    {{token}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'token'
    ])
  }
}
</script>

<style lang="less">
</style>
