<template>
<div class="MessageBoard" v-if="commentUpdate == false">
    <div class="Message New_message">
        <div class="Message_user" v-if="commentUpdate == false">
            <h2>{{user_lastName}} {{user_firstName}}</h2>
        </div>
        <div class="Message_content">
            <input type="text" v-model="comment" placeholder="Ecrire un commentaire" class="input"/>
        </div>
        <div>
            <button type="submit" @click="submitComment">Valider</button>
        </div>
    </div>
    
    <div class="Message_import" v-for="message in messageBoard" :key="message.id">
        <div>
            <div class="Message" >
                <div class="Message_user">
                    <h2>Publié par: {{message.lastName}} {{message.firstName}}</h2>
                </div>
                <div class="Message_content" >
                    <h2 v-if="commentUpdate ==false">{{message.content}}</h2>
                </div>
            </div>
            <div class="Message_modify" v-if="message.showModify">
                <div>
                    <button @click="modifyComment(message.id)" v-if="commentUpdate ==false">Modifier</button>
                </div>
                <div>
                    <button @click="deleteComment(message.id)" v-if="commentUpdate == false">Supprimer</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="Message_update" v-if="commentUpdate">
    <h2>Modifier votre article</h2>
    <input type="text" v-model="updatedComment" class="Message_update_input"/>
    <div class="Message_update_option">
        <button @click="sendModification" >Valider</button>
        <button @click="modifyCancel" v-if="commentUpdate">Annuler</button>
    </div>

</div>
    

</template>

<script>
import MessageServices from "@/services/MessageServices";
import UserServices from "@/services/UserServices";
export default {
    name: "MessageBoard",
    data(){
        return {
            messageBoard:[],
            content: "",
            comment_userId: "",
            articleId: "",
            message_id:"",
            user_lastName:"",
            user_firstName:"",
            currentUserId:localStorage.getItem("userId"),
            comment:"",
            commentUpdate:false,
            updatedComment:"",
            userRole:localStorage.getItem("role")
        }
    },
    mounted () {
        console.log("on récupère les messages")
        MessageServices.getAllMessages()
        .then(res =>res.json())
        .then(data =>{
            this.messageBoard.push(...data);
            console.log(this.messageBoard)
            for(let item in this.messageBoard){
              if(this.messageBoard[item].userId == this.currentUserId || this.userRole == 'admin'){
                console.log('vous pouvez modifier')
                Object.assign(this.messageBoard[item],{showModify:true})
              }
            }
        })
        UserServices.getUser(this.currentUserId)
        .then(res =>res.json())
        .then(userData =>{
            this.user_firstName = userData.prénom;
            this.user_lastName = userData.nom;
        })
        console.log(this.messageBoard)
    },
    methods: {
        submitComment(){
            console.log("on envoi le messages")
            let commentData = {
                content: this.comment,
                userId: this.currentUserId,
                firstName: this.user_firstName,
                lastName: this.user_lastName,
                articleId: this.$route.params.id
            };
            console.log(commentData)
            MessageServices.createMessage(commentData)
            .then(() =>{
                this.$router.go()
            })
            .catch(e => {
                console.log(e);
            })    
        },
        modifyComment(id){
            console.log("on souhaite modifier les messages")
            this.commentUpdate=true;
            this.message_id = id;
        },
        sendModification(){
            console.log("on modifie le message")
            let commentData ={
                content: this.updatedComment,
                userId: this.currentUserId,
                articleId: this.$route.params.id
            };
            MessageServices.updateMessage(this.message_id, commentData)
            .then(() =>{
                this.$router.go()
            })
            .catch(e => {
                console.log(e);
            })    
            
        },
        deleteComment(id){
            console.log("on supprimes le message")
            let Confirmation = window.confirm("Voulez-vous vraiment supprimer ce commentaire?")
            if(Confirmation ==true){
                MessageServices.deleteMessage(id)
                this.$router.go()
            }
        },
        modifyCancel(){
            this.commentUpdate=false;
        }
    }


}
</script>

<style>
.MessageBoard{
    margin-top:50px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
}
.Message{
    
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
}
.New_message{
    padding:10px;
    margin-bottom:50px;
    width:70%;
}
.Message_import{
    display:flex;
    justify-content:space-around;
    align-items: center;
    border:1px solid black;
    padding: 10px;
    width:70%;
    margin-bottom:50px;
}
.Message_update{
    width:80%;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    margin:50px 0 0 200px;
}
.Message_update_input{
    width:800px;
    height:400px;
}
.Message_user{
    border-bottom:5px black dashed;
}
.Message_content{
    margin-top:20px;
}
.Message_modify{
    margin-left:500px
}
.input{
    width:600px;
    height:200px;
}
.Message_update_option{
    display:flex;
    justify-content:space-around;
}
</style>
