let API_URL='http://localhost:3000/api/message/';
let userToken = localStorage.getItem('userToken');
class MessageServices { 
    createMessage(data) {
        return fetch(API_URL, {
            method: 'post',
            headers: {
            'content-type': 'application/json',
            'Authorization':`Bearer ${userToken}`
            },
            body: JSON.stringify(data)
        }) ;
    }
    getAllMessages() {
        return fetch(API_URL, {
            method: 'get',
            headers: {
              'content-type': 'application/json',
              'Authorization':`Bearer ${userToken}`
            }
          }) ;
    }
    findOneMessage(messageId) {
        return fetch(API_URL.concat(messageId), {
            method: 'get',
            headers: {
              'content-type': 'application/json',
              'Authorization':`Bearer ${userToken}`
            }
            
          }) ;
    }
    updateMessage(messageId,data) {
        return fetch(API_URL.concat(messageId), {
            method: 'put',
            headers: {
              'content-type': 'application/json',
              'Authorization':`Bearer ${userToken}`
            },
            body: JSON.stringify(data)
          }) ;
    }
    deleteMessage(articleId) {
        return fetch(API_URL.concat(articleId), {
            method: 'delete',
            headers: {
              'content-type': 'application/json',
              'Authorization':`Bearer ${userToken}`
            }
          }) ;
    }
  }
  export default new MessageServices();