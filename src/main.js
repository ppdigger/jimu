// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import Vuex from 'vuex'
import axios from 'axios'
// import MintUI from 'mint-ui';

// Vue.use(MintUI);
Vue.use(Vuex)
Vue.config.productionTip = false

Vue.axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
