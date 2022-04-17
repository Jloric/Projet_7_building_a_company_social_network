<template>
<div id="account">
    <span v-model="name"> nom: {{ name }} </span>
    <span v-model="prénom"> prénom: {{ prénom }} </span>
    <span v-model="email"> email: {{ email }} </span>
</div>
<button @click="deleteUser" class="delete"></button>
</template>

<script>
import UserService from "@/services/UserServices";
export default {
    name:'UserAccount',
    data(){
        return {
            name:"",
            prénom:"",
            email:""
        }
    },
    mounted (){
        UserService.getUser(this.$route.params.id)
        .then(res =>{res.json()}
        .then(data => {
        console.log(data);
        this.name = data.name;
        this.prénom = data.prénom;
        this.email = data.email;
        })
    },
    methods: {
        deleteUser() {
            let Confirmation = window.confirm("Voulez-vous vraiment suppirmer ce compte?")
            if(Confirmation.ok){
                UserService.deleteUser(this.$route.params.id)
                $this.route.back()
            }
        }
    }

}
</script>

<style>
#account{
    display:flex;
    justify-content: space-around;
}
.header_img{
    object-fit: cover;
}
.header_img_container{
    height:100px;
}
</style>