<template>
  <div class="submit-form" v-if="submitted">
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
      <div class="form-group">
        <label for="text">Nom</label>
        <input
          class="form-control"
          id="nom"
          required
          v-model="nom"
          name="nom"
        />
      </div>
      <div class="form-group">
        <label for="text">Prénom</label>
        <input
          class="form-control"
          id="prénom"
          required
          v-model="prénom"
          name="prénom"
        />
      </div>
      <button @click="userSignup" class="btn btn-success">Submit</button>
    </div>
  </div>
  <div class='submitted' v-if="submitted==false">
  <h2>{{message}}</h2>
  </div>
</template>
<script>
import UserService from "@/services/UserServices";
export default {
  name: "UserSignup",
    data() {
        return {
        id:"",
        email:"",
        password:"",
        nom:"",
        prénom:"",
        submitted:true,
        message:""
        };
    },
    mounted(){
      console.log("ok")
    },
    methods: {
        userSignup() {
        var data = {
            email: this.email,
            password: this.password,
            nom:this.nom,
            prénom:this.prénom
        };
        UserService.signup(data)
        .then(res =>res.json())
        .then(() => {
        this.submitted=false,
        this.message='Vous êtes bien inscrit'
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
    margin: auto;
    }
    .btn{
      margin-top:10px;
    }
</style>