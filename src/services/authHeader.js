// export default function authHeader() {
//     let user = JSON.parse(localStorage.getItem('userId'));
//     let userToken = JSON.parse(localStorage.getItem('userToken'));
//     if (user && userToken) {
//       // for Node.js Express back-end
//       return { 'x-access-token': userToken };
//     } else {
//       return {};
//     }
//   }