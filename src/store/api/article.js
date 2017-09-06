import Vue from 'vue'

export default {
  getArticleList (url, query, cb){
  	console.log(query);
    Vue.axios.post(url, query)
      .then(response => {
        console.log(response);
        let articleList = response.body.data
        console.log(articleList);
        cb(articleList)
      })
  }
}
