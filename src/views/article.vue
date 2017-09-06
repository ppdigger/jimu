<template lang="html">
  <p>article</p>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Item from '../components/articleItem.vue'

export default {
    components: {
      Item
    },
    computed: mapGetters({
      articleList: 'articleList',
      article: 'article',
      articleNextButton: 'articleNextButton'
    }),
    methods:{
      ...mapActions({
        getArticleList: 'getArticleList'
      })
    },
    created () {
      this.getArticleList()
    }
}
</script>

<style lang="less">
</style>
