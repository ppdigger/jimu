import Vue from 'vue'

export default {
  signup (url, query, cb){
    Vue.axios.post(url, query)
      .then(response => {
        let signup = response.data
        console.log(signup);
        cb(signup)
      })
  },
  signin (url, query, cb){
    Vue.axios.post(url, query)
      .then(response => {
        let signin = response.data
        console.log(signin);
        cb(signin)
      })
  }

}
