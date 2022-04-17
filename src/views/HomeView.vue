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
        signup
      </button>
    
    </router-link>
    <router-link to="login" >
      <button @click="hideConnexion" >
        login
      </button>
    </router-link>
  </div>
  <router-view ></router-view>
</div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data(){
    return {
    connexion:true
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
  object-fit:contain;
}
#logo_main{
    height:600px;
    width:800px;
    margin-bottom:80px;
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
  left: 0; 
}

#main{
  background-color:lightgray;
}
</style>