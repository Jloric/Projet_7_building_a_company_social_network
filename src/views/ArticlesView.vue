<template>
<HeaderArticles/>
<div id="articleView" >
    <ArticlesList />

    <router-link to="/articles/new-article">
     <button id="createArticle">Créer un article</button>
    </router-link>
   
    <router-view></router-view>
</div>
</template>


<script>
import ArticlesList from '@/components/articles/ArticlesList'
import HeaderArticles from "@/components/Header/HeaderArticles";
export default {
    components:{
        ArticlesList,
        HeaderArticles
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
    margin-top:65px;
    display:flex;
    flex-direction:column;
    align-items:center;
}
#disconnect{
    position: absolute;
    bottom:50px;
    right:50px;
}
#createArticle{
    margin-bottom:50px;
}
</style>