<template>

<div id="container">
  <router-view />
</div>

  
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
},
#retour{
  width:50px;
  font-size: 12px;
  position: absolute ;
  top:0;
  left: 0; 
},
#container{
  display:flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width:896px){
  body{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between
  }
  #app{
    width:100%;
  }
  #logo_main{
    margin-top:75px;
    height:500px;
    width:90%;
  }
  .logo{
    object-fit: fill;
    width:100%;
    height: 500px;
  }
  #connexion{
    margin-top:-200px;
    width: 100%;
  }
  .submit-form{
    margin-top:-200px;
  }
}

</style>
