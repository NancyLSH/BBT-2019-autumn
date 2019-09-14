<template>
  <div class="success">
    <h1>{{status}}成功</h1>
    <div class="btn">
      <el-button @click="toHome">返回</el-button>
      <el-button @click="toCheck">查看</el-button>
    </div>
    <div class="bg">
      <img src="../../public/static/3.png" style="width:100%" />
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
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    toCheck() {
      this.$router.push("/check");
      //   有点问题
    }
  }
};
</script>

<style>
.success {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #f2f7dc;
}
h1 {
  margin: 10%;
  text-align: center;
  font-weight: 100;
  margin-top: 35%;
  color:#8C523B;
}
.success .bg {
  position: absolute;
  bottom: 0;
}
.btn {
  text-align: center;
  width: 80%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 25%;
  left: 10%;
}

.success .el-button {
  width: 60%;
  margin: 5% auto;
}
/* .el-button + .el-button{
    margin-left:0;
} */
</style>