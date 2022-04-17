let API_URL='http://localhost:3000/api/user/';
let userToken = localStorage.getItem('userToken');
class UserService { 
    login(data) {
        return fetch(API_URL.concat("login"), {
            method: 'post',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }) ;
    }
    signup(data) {
        return fetch(API_URL.concat("signup"), {
            method: 'post',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          }) ;
    }
    getUser(userId) {
      return fetch(API_URL.concat(userId), {
          method: 'get',
          headers: {
            'content-type': 'application/json',
            'Authorization':`Bearer ${userToken}`

          }
        });
    }
    deleteUser(userId) {
      return fetch(API_URL.concat(userId), {
          method: 'delete',
          headers: {
            'content-type': 'application/json',
            'Authorization':`Bearer ${userToken}`

          }
        }) ;
    }

  }
  export default new UserService();