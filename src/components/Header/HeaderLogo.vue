<template>
<div class="header_img_container">
    <img src="@/assets/icon-black.png" class="header_img"/>
</div>
<button @click="Back" class="Back">retour</button>


</template>

<script>
export default {
    name:'HeaderLogo',
    methods:{
        Back(){
            this.$router.back()
        }
    }

}
</script>

<style>
.header_img{
    object-fit: cover;
}
.header_img_container{
    height:100px;
}
</style>