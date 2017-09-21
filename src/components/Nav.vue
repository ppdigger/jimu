<template>
  <div id="nav">
    <ul class="nav clearfix">
      <li :class="{'active' : index === 1}" @click="selected(1)">
        <router-link :to="{ path: '/' }">
          <i class="fa fa-home"></i>
        </router-link>
      </li>
      <li :class="{'active' : index == 2}" @click="selected(2)">
        <router-link :to="{ path: '/recommend' }">
          <i class="fa fa-gift"></i>
        </router-link>
      </li>
      <li :class="{'active' : index == 3}" @click="selected(3)">
        <router-link :to="{ path: '/photo' }">
          <i class="fa fa-picture-o"></i>
        </router-link>
      </li>
      <li :class="{'active' : index == 4}" @click="selected(4)">
        <router-link :to="{ path: '/article' }">
          <i class="fa fa-pencil-square-o"></i>
        </router-link>
      </li>
      <li :class="{'active' : index == 5}" @click="selected(5)">
        <router-link :to="{ path: '/usermain' }">
          <i class="fa fa-address-card-o"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data: function(){
      return {
        index: 1
      }
    },
    computed: mapGetters({
      index: 1
    }),
    methods: {
      selected: function(index){
        this.index = index
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../../static/css/common.less';
  #nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
  }
  .nav{
    width:100%;
    background: #e62117;
    li{
      position: relative;
      float: left;
      width: 20%;
      text-align: center;
      font-size: 0.24rem;
      line-height: 2em;
      a{
        color: #5c0d09;
      }
      &.active{
        a{
          color: #fff;
        }
        &:after{
          opacity: 1;
        }
      }
      &:after{
        position: absolute;
        content: '';
        width: 100%;
        left: 0;
        top: 0;
        display: block;
        height: 3px;
        background: #fff;
        opacity: 0;
      }
    }
    .line{
    }
  }
</style>
