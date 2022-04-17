<template>
<router-link to="/" >
  <button id="retour">Home</button>
</router-link>
<div id="articleView" >
    <ArticlesList v-if="listShown"  />

    <router-link to="/articles/new-article">
     <button id="createArticle">Créer un article</button>
    </router-link>
   
    <router-view></router-view>
</div>
</template>


<script>
import ArticlesList from '@/components/articles/ArticlesList'

export default {
    data(){
        return{
            listShown:true,
            createArticleShown:false,
            disconnectSeen:true,
            showArticle:false,
            id:"",
            login:""
            
        }
    },
    components:{
        ArticlesList,
    }
}
</script>


<style>
#account{
    position:absolute;
    top:0;
    right:50;
}
#articleView{
    margin-bottom:-50px;
    margin-top:150px;
}
#disconnect{
    position: absolute;
    bottom:50px;
    right:50px;
}
#createArticle{
    position: absolute;
    bottom:50px;
    left:50px;
}
</style>