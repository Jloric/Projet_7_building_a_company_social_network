<template>
<div id="menu">
    <button class="accountButton" @click="showAccount">Mon profil</button>
    <button class="disconnect" @click="disconnectUSer">Se déconnecter</button>
</div>
</template>

<script>
export default {
    name:'UserAccount',
    data(){
        return{
            userId:localStorage.getItem("userId")
        }
    },
    methods:{
        disconnectUSer(){
            localStorage.removeItem("userId");
            localStorage.removeItem("userToken")
            this.$router.push("/")
        },
        showAccount(){
            this.$router.push({ name:"Account", params: { id :this.userId } })
        }
    }
}
</script>

<style>
#menu{
    display:flex;
    justify-content: space-around;
}
.disconnect{
    margin-left:20px;
}
</style>