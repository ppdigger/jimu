<template lang="html">
  <div class="">
    <item
      v-for="item in articleList"
      :key="item.id"
      :title="item.title"
      :blockquote="item.blockquote"
      :createtime="item.createTime"
      :picture="item.picture"
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

<style lang="less">
.clamp(@num:2){
    overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: @num;-webkit-box-orient: vertical;
}

</style>
