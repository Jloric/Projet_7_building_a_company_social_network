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
    components :{
        Account,
        HeaderLogo
    },
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
    justify-content: space-between;
}

</style>