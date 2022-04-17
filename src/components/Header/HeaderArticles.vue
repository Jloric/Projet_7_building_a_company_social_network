<template>
<div class="header">
    <HeaderLogo/>
    <Account/>
</div>
</template>

<script>
import Account from "@/components/Header/AccountNav";
import HeaderLogo from "@/components/Header/HeaderLogo"
export default {
    name:'HeaderArticle',
    methods:{
        Back(){
            this.$router.back()
        }
    }

}
</script>

<style>
.header{
    display:flex;
    justify-content: space-around;
}

</style>