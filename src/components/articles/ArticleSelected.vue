<template>
<Header/>

<div class="thisArticle">
    <div>
        <h1 class="title">{{title}}</h1>
    </div>
    <div  >
        <h2 class="content">{{content}}</h2>
    </div>
</div>
<div>
    <button class="modify" @click="updateArticle" v-if="modifyArticle">
        Modifier
    </button>
    <button class="delete" @click="deletedArticle" v-if="modifyArticle">
        Supprimer
    </button>
</div>

</template>

<script>
import ArticleServices from "@/services/ArticleServices";

export default {
  name: "ArticlesList",
  data(){
      return{
          title:"",
          content:"",
          articleUserId:"",
          modifyArticle:false
      }
  },
  mounted() {
      ArticleServices.findOnePost(this.$route.params.id)
        .then(res =>res.json())
        .then(data => {
            this.title = data.title;
            this.content = data.content;
            this.articleUserId = data.userId;
            let currentUserId=localStorage.getItem("userId");
            console.log(currentUserId)
            console.log(this.articleUserId)
            if(this.articleUserId == currentUserId){
                this.modifyArticle=true
            }
                
        })
        .catch(e => {
            console.log(e);
        })    
    },
    methods: {
        updateArticle(){
            this.$router.push({ name:"ArticlesUpdate", params: { id :this.$route.params.id } });
        },
        deletedArticle(){

            let Confirmation =window.confirm("voulez-vous vraiment supprimer l'article?")

            if(Confirmation.ok){
                ArticleServices.deletePost(this.$route.params.id)
            }
        }
    }

  
}
</script>

<style>
.title{
    margin-top:100px;
    min-height:50px;
    height: auto;
}
.content{
    border:lightgray 1px solid;
    padding:15px;
    text-align: left;
    min-height:500px;
    height:auto;
}
.thisArticle{
    border-bottom:none;
}
</style>