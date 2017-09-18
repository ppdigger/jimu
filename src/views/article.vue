<template lang="html">
  <div class="">
    <item
      v-for="item in articleList"
      :key="item.id"
      :title="item.title"
      :blockquote="item.blockquote"
      :createtime="item.createTime"
      :picture="item.picture"
      :avatar="item.author.avatar"
      :name="item.author.name"
    ></item>
    <div class="div-next" v-if="articleNextButton">
      <a class="btn btn-default" @click="next">NEXT</a>
    </div>
  </div>
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
        getArticleList: 'getArticleList',
        next: 'articleNext'
      })
    },
    created () {
      this.getArticleList()
    }
}
</script>

<style lang="less" scoped>
.div-next{
  width: 100%;
  text-align: center;
  font-size: 0.14rem;
  line-height: 2.4em;
}
</style>
