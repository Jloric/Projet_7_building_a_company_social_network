<template>
<div id="articlesList">
    <div class="article" v-for="article in ListOfArticles" :key="article.title">
        <h1 @click="SelectedArticle(article.id)">{{article.title }}</h1>
    </div>
</div>
</template>

<script>
import ArticleServices from "@/services/ArticleServices";
export default {
  name: "ArticlesList",
    data() {
        return {
        ListOfArticles: []
        };
        
    },
    methods:{
        SelectedArticle(articleId){
            this.$router.push({ name:"ArticleSelected", params: { id :articleId } });
        }
    },
 //on reçupère les articles dès l'ouverture la page   
    mounted() {
            console.log(localStorage.getItem("userToken"));
            ArticleServices.getAllPost()
            .then(res =>res.json())
            .then(data => {
                this.ListOfArticles.push(...data);
                this.ListOfArticles.reverse();
                
            })
            .catch(e => {
                console.log(e);
            })    
    }
};

</script>


<style>
#articlesList{
    width:90%;
}
.article{
    border:1px black solid;
    margin-bottom:15px;
}
a{
    text-decoration:none;
    color:black;
}
</style>