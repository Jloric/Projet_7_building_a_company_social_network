<template>
  <span v-if="connexionKo" class="alertConnexion">
    il y eu une problème, veuillez vérifier les information de connexions!
  </span>
  <div class="submit-form">
    <div>
      <div class="form-group">
        <label for="text">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          required
          v-model="email"
          name="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          required
          v-model="password"
          name="password"
        />
      </div>
      <button @click="LoginUser" class="btn btn-success" >Envoyer</button>      
    </div>
  </div>


</template>
<script>
import UserService from "@/services/UserServices";
export default {
    name: "UserLogin",
    emits:["LoginUser"],
    data() {
        return {
        id:"",
        email:"",
        password:"",
        submit:false,
        connexionKo:false
        };
    },
    methods: {
        LoginUser() {
        var user = {
            email: this.email,
            password: this.password
        };
        UserService.login(user)
        .then(res =>{
          if (res.status==200){
            return res.json()
          }
          else{
            this.connexionKo=true;
            throw new Error("Une erreur est survenue")
          }
        })
        .then(data => {
        console.log(data);
        this.id = data.userId;
        localStorage.setItem('userId',this.id);
        localStorage.setItem('userToken',data.token);
        this.$router.push('/articles')
        })
        .catch(e => {
        console.log(e);
        });
        }
    }
};
</script>
<style>
    .form-group{
      margin-top:10px;
    }
    .form-group input{
      margin-left:10px;
    }
    .submit-form {
    max-width: 300px;
    border: black 1px solid;
    padding:10px;
    }
    .btn{
      margin-top:10px;
    }
    .alertConnexion{
      color:red
    }
</style>