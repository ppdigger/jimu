<template>
  <div id="app">
    <navs></navs>
    <transition name="component-fade" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'app',
  components: {
    'navs': Nav
  }
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
}
html{
  font-size: 625%;
}
body{
  overflow-x: hidden;
  font-size: 0.14rem;
}
body,html,h1,h2,h3,h4,h5,h6,p,ul,dl,div,li,dt,dd,a,img,i,span,blockquote,em {
  margin: 0;
  padding: 0;
}
.anim{
  transition: 0.2 s ease;
  -moz-transition: 0.2s ease; /* Firefox 4 */
  -webkit-transition: 0.2s ease; /* Safari 和 Chrome */
  -o-transition: 0.2s ease; /* Opera */
}
#app {
  width: 100%;
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
li{
  list-style: none;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}
</style>
