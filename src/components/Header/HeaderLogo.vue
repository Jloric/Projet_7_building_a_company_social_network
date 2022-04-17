<template>
<div class="returnOption">
    <div>
        <button @click="Back" class="back">retour</button>
    </div>
    <div class="header_img_container">
        <router-link to='/'>
            <img src="@/assets/icon-black.png" class="header_img" />
        </router-link>
        
    </div>
    
</div>




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
.returnOption{
    display:flex;
    justify-content: space-around;
    width:70%
}

.header_img{
    object-fit: cover;
    height:100%;
    width:100%;
}
.header_img_container{
    margin-left:130px;
    height:100px;
    width:600px;
}.back{
    position: absolute;
    top:15px;
    left:25px;
}
</style>