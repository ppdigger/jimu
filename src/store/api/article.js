import Vue from 'vue'

export default {
  getArticleList (url, query, cb){
    Vue.axios.post(url, query)
      .then(response => {
        let articleList = response.data.data
        console.log(articleList);
        cb(articleList)
      })
  }
}
