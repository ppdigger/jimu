import * as types from '../mutation-types'
import router from '../../router'

const state = {
  signToggle: 'signin'
}

const getters = {
  signToggle: state => state.signToggle
}

const actions = {
  signToggle({ commit }, str){
    commit(types.SIGN_TOGGLE, str)
  }
}

const mutations = {
  [types.SIGN_TOGGLE] (state, str) {
    state.signToggle = str
  },
}


export default {
  state,
  getters,
  actions,
  mutations
}
