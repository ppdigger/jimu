import * as types from '../mutation-types'
import router from '../../router'
import article from '../api/article'

const state = {
  articlePage: 0,
  articleLimit: 6,
  articleNextButton: true,
  articleListUrl: types.URL + '/api/articleList',
  articleList: [],
  articleUrl: types.URL + '/api/article',
  article: null,
  articleSearch: ''
}
const getters = {
  articleList: state => state.articleList,
  article: state => state.article,
  articleNextButton: state => state.articleNextButton
}
const actions = {
  getArticleList ({ commit }) {
    if(state.articleList.length == 0){
      article.getArticleList(state.articleListUrl, {
        page: state.articlePage,
        limit: state.articleLimit
      }, articleList => {
        if(articleList.length != 0){
        commit(types.ARTICLE_GET_SUCCESS, { articleList })
          if(articleList.length < state.articleLimit){
            commit(types.ARTICLE_NEXT_BUTTON_CLOSE)
          }
        } else{
          commit(types.ARTICLE_NEXT_BUTTON_CLOSE)
        }
      })
    }
  },
  articleNext ({ commit }) {
    commit(types.ARTICLE_NEXT)
    article.getArticleList(state.articleListUrl, {
      page: state.articlePage,
      limit: state.articleLimit
    }, articleList => {
      if(articleList.length != 0){
      commit(types.ARTICLE_GET_SUCCESS, { articleList })
        if(articleList.length < state.articleLimit){
          commit(types.ARTICLE_NEXT_BUTTON_CLOSE)
        }
      } else{
        commit(types.ARTICLE_NEXT_BUTTON_CLOSE)
      }
    })
  }
}

const mutations = {
  [types.ARTICLE_GET_SUCCESS] (state, { articleList }) {
    state.articleList = state.articleList.concat(articleList)
  },
  [types.ARTICLE_NEXT] (state) {
    console.log('ARTICLE_NEXT')
    state.articlePage++
  },
  [types.ARTICLE_NEXT_BUTTON_CLOSE] (state) {
    state.articleNextButton = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
