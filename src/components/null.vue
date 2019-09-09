<template>
    <div class="null">
        <h1>尚未报名</h1>
        <div class="btn">
            <el-button @click="toSignup">前往报名</el-button>
            <el-button @click="toHome">返回</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'nosignup',
    methods:{
        toSignup(){
            this.$router.push('/signup')
        },
        toHome(){
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>

</style>