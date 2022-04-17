<template>
<Header/>
<div class="articleSeleccted">
    <input v-model="title" placeholder="Titre" type="text" class="title"/>
    <input v-model="content" placeholder="Contenue" type="text" class="content"/>
</div>
    <button @click="AddArticle">Valider</button>
    <h2>{{message}}</h2>
</template>
<script>
import ArticleServices from "@/services/ArticleServices";
import Header from "@/components/Header/HeaderArticles";
export default {
  name: "ArticleSelected",
    data() {
        return {
        title:"",
        content:"",
        id:localStorage.getItem("userId"),
        message:""
        };
    },
    methods: {
        AddArticle(){
            let data ={
                title:this.title,
                content:this.content,
                id:this.id
            };
            ArticleServices.createPost(data)
            .then(() =>{
            this.message = "l'article à bien était envoyé"
            })
            .catch(e => {
                console.log(e);
            })
        }
    }
};

</script>
<style>
.articleSeleccted{
    display:flex;
    flex-direction:column;
    justify-content: space-around;
}
.content {
    margin-top:20px;
    height:500px;
}
</style>