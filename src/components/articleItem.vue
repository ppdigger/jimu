<template>
  <li class="article-item">
    <p class="tip">
      <span></span>
    </p>
    <div class="box clearfix">
      <div class="txt fl">
        <p class="title">
          {{title}}
        </p>
        <p class="abst">
            {{blockquote}}
        </p>
      </div>
      <div class="img fr" :style="{backgroundImage: 'url(' + picture + ')'}">

      </div>
    </div>
    <div class="author clearfix">
      <a href="#">
        <div class="avatar fl">
          <img :src="avatar" alt="">
        </div>
        <p class="name fl">{{name}}</p>
      </a>
      <p class="more fr">
        <i class="ico"></i>
        <i class="ico"></i>
        <i class="ico"></i>
      </p>
    </div>
  </li>
</template>

<script>
export default {
   props: ['title','blockquote','picture','avatar','name']
}
</script>

<style lang="less" scoped>
@import '../../static/css/common.less';
  li{
    padding: 0.14rem;
    background: #fff;
    margin: 0.12rem 0;
    .tip{

    }
    .box{
      position: relative;
      .txt{
        width: 70%;
        padding-bottom: 0.14rem;
        .title{
          font-size: 0.16rem;
          padding-bottom: 0.4em;
          color: #494949;
        }
        .abst{
          font-size: 0.12rem;
          color: #9b9b9b;
          .clamp(2);
        }
      }
      .img{
        position: absolute;
        right: 0;
        top:0;
        bottom: 0;
        width: 26%;
        background-size: cover;
        img{

        }
      }
    }
    .author{
      padding: 0.1rem 0 0;
      .avatar{
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        overflow: hidden;
        .radius(100%);
      }
      .name{
        color: #494949;
        text-indent: 0.6em;
        font-size: 0.12rem;
        line-height: 0.24rem;
      }
      .more{
        line-height: 0.24rem;
        .ico{
          display: inline-block;
          width: 4px;
          height: 4px;
          background: #ccc;
          .radius(100%);
        }
      }
    }
  }
</style>
