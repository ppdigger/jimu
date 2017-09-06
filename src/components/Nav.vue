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
        <router-link :to="{ path: '/user' }">
          <i class="fa fa-address-card-o"></i>
        </router-link>
      </li>
      <span class="line anim" :style="{ left: left + '%' }"></span>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
          index: 1,
          left: 0
      }
    },
    methods: {
      selected: function(index){
        this.index = index
        this.left = (index - 1)* 20
      }
    }
  }
</script>

<style lang="less" scoped>
  #nav{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .nav{
    position: relative;
    width:100%;
    background: #e62117;
    li{
      float: left;
      width: 20%;
      text-align: center;
      font-size: 0.24rem;
      line-height: 2.4em;
      a{
        color: #5c0d09;
      }
      &.active a{
        color: #fff;
      }
    }
    .line{
      position: absolute;
      width: 20%;
      left: 0;
      top: 0;
      display: block;
      height: 3px;
      background: #fff;
    }
  }
</style>
