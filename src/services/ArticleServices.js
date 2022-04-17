let API_URL='http://localhost:3000/api/post/';
let userToken = localStorage.getItem('userToken');
class ArticleServices { 
    createPost(data) {
        return fetch(API_URL, {
            method: 'post',
            headers: {
            'content-type': 'application/json',
            'Authorization':`Bearer ${userToken}`
            },
            body: JSON.stringify(data)
        }) ;
    }
    getAllPost() {
        return fetch(API_URL, {
            method: 'get',
            headers: {
              'content-type': 'application/json',
              'Authorization':`Bearer ${userToken}`
            }
          }) ;
    }
    findOnePost(articleId) {
        return fetch(API_URL.concat(articleId), {
            method: 'get',
            headers: {
              'content-type': 'application/json',
              'Authorization':`Bearer ${userToken}`
            }
            
          }) ;
    }
    updatePost(articleId,data) {
        return fetch(API_URL.concat(articleId), {
            method: 'put',
            headers: {
              'content-type': 'application/json',
              'Authorization':`Bearer ${userToken}`
            },
            body: JSON.stringify(data)
          }) ;
    }
    deletePost(articleId) {
        return fetch(API_URL.concat(articleId), {
            method: 'delete',
            headers: {
              'content-type': 'application/json',
              'Authorization':`Bearer ${userToken}`
            }
          }) ;
    }
  }
  export default new ArticleServices();