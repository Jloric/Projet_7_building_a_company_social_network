<template>
<Header/>
<div id="articlesList">
    <div class="article" v-for="article in ListOfArticles" :key="article.title">
        <h1 @click="SelectedArticle(article.id)">{{article.title }}</h1>
    </div>
</div>
</template>

<script>
import ArticleServices from "@/services/ArticleServices";
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
            console.log(articleId)
            this.$router.push({ name:"ArticleSelected", params: { id :articleId } });
        }
    },
 //on reçupère les articles dès l'ouverture la page   
    mounted() {
            
            ArticleServices.getAllPost()
            .then(res =>res.json())
            .then(data => {
                console.log(data)
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
.article{
    border:1px black solid;
    margin-bottom:15px;
}
a{
    text-decoration:none;
    color:black;
}
</style>