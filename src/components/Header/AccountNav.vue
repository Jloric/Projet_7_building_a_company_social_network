<template>
<nav id="menu">
    <router-link to="/account"></router-link>
    <button class="disconnect" @click="disconnectUSer"></button>
</nav>
</template>

<script>
export default {
    name:'UserAccount',
    methods:{
        disconnectUSer(){
            localStorage.setItem("userId","");
            localStorage.setItem("userToken","")
            this.$router.push("/")
        }
    }

}
</script>

<style>
#menu{
    display:flex;
    justify-content: space-around;
}
</style>