<template>
<HeaderArticles/>
<div class="thisArticle_main" v-if="articleDeleted ==false">
    <div class="thisArticle">
        <div>
            <h1 class="title">{{title}}</h1>
        </div>
        <div>
            <h2 class="content">{{content}}</h2>
        </div>
    </div>
    <div class="modification">
        <button class="modify" @click="updateArticle" v-if="modifyArticle">
            Modifier
        </button>
        <button class="delete" @click="deletedArticle" v-if="modifyArticle">
            Supprimer
        </button>
    </div>
</div>
<div v-if="articleDeleted">
    <h2>L'article à bien éte supprimé </h2>
</div>


</template>

<script>
import ArticleServices from "@/services/ArticleServices";
import HeaderArticles from "@/components/Header/HeaderArticles";
export default {
  name: "ArticlesList",
  data(){
      return{
          title:"",
          content:"",
          articleUserId:"",
          modifyArticle:false,
          articleDeleted:false
      }
  },
   components:{
        HeaderArticles
    },
  mounted() {
      ArticleServices.findOnePost(this.$route.params.id)
        .then(res =>res.json())
        .then(data => {
            this.title = data.title;
            this.content = data.content;
            this.articleUserId = data.userId;
            let currentUserId=localStorage.getItem("userId");
            if(this.articleUserId == currentUserId || currentUserId == 1){
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
            if(Confirmation ==true){
                ArticleServices.deletePost(this.$route.params.id)
                this.articleDeleted =true;
                
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
    width:80%;
    display:flex;
    flex-direction:column;
    margin-left:10%;
}
.modification{
    display:flex;
    justify-content: space-around;
}
</style>