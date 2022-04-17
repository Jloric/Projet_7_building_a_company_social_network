<template>
<HeaderLogo/>
<div class="account">
    <div class="account_info">
        <div>
            <h2> nom: {{ name }} </h2>
        </div>
        <div>
            <h2> prénom: {{ prénom }} </h2>
        </div>
        <div>
            <h2> email: {{ email }} </h2>
        </div> 
    </div>
    <div class="delete">
        <button @click="deleteUser" class="deleteButton">Supprimer le compte</button>
    </div>
    
</div>

</template>

<script>
import UserService from "@/services/UserServices";
import HeaderLogo from "@/components/Header/HeaderLogo";
export default {
    name:'UserAccount',
    components:{
        HeaderLogo
    },
    data(){
        return {
            name:"",
            prénom:"",
            email:"",
            userId : this.$route.params.id
        }
    },
    mounted (){
        UserService.getUser(this.userId)
        .then(res =>res.json())
        .then(data => {
            this.name = data.nom;
            this.prénom = data.prénom;
            this.email = data.email;
        })
    },
    methods: {
        deleteUser() {
            let Confirmation = window.confirm("Voulez-vous vraiment suppirmer ce compte?")
            if(Confirmation == true){
                UserService.deleteUser(this.userId)
                this.$router.push('/')
            }
        }
    }

}
</script>

<style>
.account{
    position: absolute;
    top:150px;
    left:150px;
    width: 80%;
    display: flex;
    justify-content:space-between;
    border: 2px solid black;
    padding: 10px;
}
.account_info{
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    text-align:left;
}
.delete{
    display: flex;
    flex-direction:column;
    justify-content:center;
}
.deleteButton{
    margin-top:0;
}
</style>