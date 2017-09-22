// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from '@/store/mutation-types'
// import MintUI from 'mint-ui';

// Vue.use(MintUI);
Vue.use(Vuex)
Vue.config.productionTip = false

Vue.axios = axios

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('mujitoken')) {
    store.commit(types.LOGIN_SUCCESS, { token: window.localStorage.getItem('mujitoken') })
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {  // 判断该路由是否需要登录权限
        if (store.getters.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/user',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

// http request 拦截器
Vue.axios.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers.Authorization = `${store.getters.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
Vue.axios.interceptors.response.use(
  // response => {
  //     return response;
  // },
  // error => {
  //     if (error.response) {
  //         switch (error.response.status) {
  //             case 401:
  //                 // 401 清除token信息并跳转到登录页面
  //                 store.commit(types.LOGOUT);
  //                 router.replace({
  //                     path: 'login',
  //                     query: {redirect: router.currentRoute.fullPath}
  //                 })
  //         }
  //     }
  //     // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
  //     return Promise.reject(error.response.data)
  // }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
