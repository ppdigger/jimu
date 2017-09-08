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
      <div class="img fr">
        <img :src="picture" alt="">
      </div>
    </div>
  </li>
</template>

<script>
export default {
   props: ['title','blockquote','picture']
}
</script>

<style lang="less" scoped>
@import '../../static/css/common.less';
  li{
    padding: 12px 8px;
    background: #fff;
    .tip{

    }
    .box{
      .txt{
        width: 70%;
        .title{

        }
        .abst{
          .clamp(4);
        }
      }
      .img{
        width: 28%;
        img{

        }
      }
    }
    & + li{
      margin-top: 8px;
    }
  }
</style>
