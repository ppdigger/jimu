import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Recommend from '@/views/recommend'
import Photo from '@/views/photo'
import Article from '@/views/article'
import User from '@/views/user'
import Usermain from '@/views/usermain'
import store from '@/store/index'

Vue.use(Router)




export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/photo',
      component: Photo
    },
    {
      path: '/article',
      component: Article,
      meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/usermain',
      component: Usermain,
      meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    }
  ]
})
