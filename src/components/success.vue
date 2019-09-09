<template>
  <div class="success">
    <h1>{{status}}成功</h1>
    <div class="btn">
      <el-button @click="toHome">返回</el-button>
      <el-button @click="toCheck">查看</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "success",
  data() {
    return {
      status: ""
    };
  },
  mounted() {
    this.status = this.$route.params.status;
  },
  methods:{
      toHome(){
          this.$router.push('/home')
      },
      toCheck(){
          this.$router.push('/check')
        //   有点问题
      }
  }
};
</script>

<style scoped>
h1{
    margin:10%;
    text-align: center;
}
.btn{
    text-align: center;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
}
.el-button{
    width:50%;
    margin:5% auto;
}
/* .el-button + .el-button{
    margin-left:0;
} */
</style>