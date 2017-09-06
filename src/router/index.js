import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Recommend from '@/views/recommend'
import Photo from '@/views/photo'
import Article from '@/views/article'
import User from '@/views/user'

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
      component: Article
    },
    {
      path: '/user',
      component: User
    }
  ]
})
