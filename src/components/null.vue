<template>
    <div class="null">
        <h1>尚未报名</h1>
        <div class="btn">
            <el-button @click="toSignup">前往报名</el-button>
            <el-button @click="toHome">返回</el-button>
        </div>
        <div class="bottom"><img src="../assets/3.png" style="width:100%;vertical-align: bottom;"></div>
    </div>
</template>

<script>
import {wxshare} from "../api/api"
export default {
    name:'nosignup',
    methods:{
        toSignup(){
            this.$router.push('/signup')
        },
        toHome(){
            this.$router.push('/home')
        }
    },
    mounted:function(){
        // wxshare(this)
    }
}
</script>

<style>
.null{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color:#f2f7dc;
}

.null .el-button{
    margin:5% auto;
    width:60%;
}
/* .el-button + .el-button {
    margin-left: 0;
} */
</style>