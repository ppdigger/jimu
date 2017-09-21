import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import article from './modules/article'
import user from './modules/user'
import * as types from './mutation-types'
// import goodsList from './modules/goodsList'
// import photosList from './modules/photosList'
// import blogsList from './modules/blogsList'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    article,
    user
    // goodsList,
    // photosList,
    // blogsList
  },
  strict: debug
})
