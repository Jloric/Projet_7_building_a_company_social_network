<template>
<router-link to="/" >
  <button id="retour" @click="returnToHome">Home</button>
</router-link>
<div class="home">
  <div id="logo_main">
    <img class="logo" src="@/assets/icon-above-font.png"/>
  </div>
  <div id="connexion" v-if="connexion">
    <router-link to="signup" >
      <button @click="hideConnexion" >
        S'inscrire
      </button>
    
    </router-link>
    <router-link to="login" >
      <button @click="hideConnexion" >
        Se conencter
      </button>
    </router-link>
  </div>
  <router-link to="/articles" v-if="userIsConnected">
    <button>Vous êtes connecté ! <br/>Appuyer ici pour voir les articles</button>
  </router-link>
  <router-view ></router-view>
</div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data(){
    return {
    connexion:true,
    userIsConnected:false
    }
    
  },
  methods: {
    returnToHome(){
      this.connexion=true
    },
    hideConnexion(){
      this.connexion=false
      this.ReturnSeen=true
    }   
  },
  mounted() {
    let id=localStorage.getItem("userId");
    let token=localStorage.getItem("userToken");
    if(id & token !=null){
      this.userIsConnected=true,
      this.connexion =false
    }
  }  
}

</script>
<style>
.home{
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items: center;
  height:auto;
}
.logo{
  object-fit:fill;
  height:auto;
  max-height:700px
}
#logo_main{

    width:80%;
    margin-top:150px;
    margin-bottom:80px;
    height:500px;

}
#connexion{
    width: 100%;
    display:flex ;
    flex-direction: row ;
    justify-content: space-around;
}
button{
    width:200px;
    height: 50px;
    border-radius: 15px 15px;
    background-color:lightpink;
    margin-top:20px;
}

#retour{
  width:50px;
  font-size: 12px;
  position: absolute ;
  top:0;
  left: 25px; 
}

#main{
  background-color:lightgray;
}
</style>