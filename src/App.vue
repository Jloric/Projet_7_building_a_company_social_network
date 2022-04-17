<template>

<div id="container">
  <router-view />
</div>


  
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
      ReturnSeen:true
    }
  }
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
}

</style>
