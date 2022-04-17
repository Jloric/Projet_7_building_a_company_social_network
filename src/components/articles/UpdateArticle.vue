<template>
<Header/>
<div class="articleSeleccted">
    <input v-model="title" placeholder="Titre" type="text" class="title"/>
    <input v-model="content" placeholder="Contenue" type="text" class="content"/>
</div>
    <button @click="UpdateArticle">Valider</button>
    <h2>{{message}}</h2>
</template>
<script>
import ArticleServices from "@/services/ArticleServices";
import Header from "@/components/Header/HeaderArticles";
export default {
    name: "ArticleSelected",
    components:{
      Header
    },
    data() {
        return {
        title:"",
        content:"",
        message:""
        };
    },
    methods: {
        UpdateArticle(){
            let data ={
                title:this.title,
                content:this.content,
                id:this.$route.params.id
            };
            ArticleServices.updatePost(this.$route.params.id, data)
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
    margin-top:100px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
}
.content {
    margin-top:20px;
    height:500px;
}
.Back{
    position:absolute;
    top:0;
    left:0;
    width:50px;
}
</style>