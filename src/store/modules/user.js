import * as types from '../mutation-types'
import router from '../../router'
import user from '../api/user'

const state = {
  checkStatus: '0',
  token: '',
  name: '',
  id: '',
  signToggle: 'signin',
  signupUrl: types.URL + '/api/signup',
  signinUrl: types.URL + '/api/authenticate'

}

const getters = {
  signToggle: state => state.signToggle,
  token : state => state.token,
  name : state => state.name,
  id: state => state.id
}

const actions = {
  signToggle({ commit }, str){
    commit(types.SIGN_TOGGLE, str)
  },
  signUp({ commit }, query){
    user.signup(state.signupUrl, { email: query.email, password: query.password, name: query.name }, response => {
      let status = response.status
      if(status == 1){
        alert(response.message)
      } else if(status == 0){
        commit(types.SIGN_TOGGLE, 'signin')
      }
    })
  },
  signIn({ commit }, query){
    user.signin(state.signinUrl, { email: query.email, password: query.password }, response => {
      let status = response.status
      if(status == 1){
        alert(response.message)
      } else if(status == 0){
        let token = response.data.token
        let name = response.data.name
        let id = response.data.id
        commit(types.LOGIN_SUCCESS, { token, name, id })
      }
    })
  },
  signOut({ commit }){
    commit(types.SIGNOUT)
    router.push('user')
  }
}

const mutations = {
  [types.SIGN_TOGGLE] (state, str) {
    state.signToggle = str
  },
  [types.LOGIN_SUCCESS] (state, { token, name, id }) {
    state.token = token
    state.name = name
    state.id = id
    window.localStorage.setItem('mujitoken', token)
  },
  [types.SIGNOUT] (state) {
    state.token = null
    window.localStorage.removeItem('mujitoken')
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
