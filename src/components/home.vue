<template>
  <div class="home bg">
    <div class="top btns">
      <el-button>点击进入游戏</el-button>
    </div>
    <div class="bottom btns">
      <el-button @click="toSignup">开始报名</el-button>
      <el-button @click="toIntroduction">部门介绍</el-button>
      <el-button @click="toCheck">查看报名</el-button>
    </div>
    <!-- <div class="href" @click="toBackstage">内部查询请点击此处</div> -->
    <div class="bottom-pic">
<<<<<<< HEAD
      <img src="../../src/assets/2.png" />
=======
      <img src="../assets/2.png" />
>>>>>>> 837a611198919d64990d3a862e974dda77a9fabc
    </div>
  </div>
</template>

<script>
import {wxshare} from "../api/api"
export default {
  name: "home",
  methods: {
    toSignup() {
      this.$router.push("/signup");
    },
    toIntroduction() {
      this.$router.push("/introduction");
    },
    toCheck() {
      this.$router.push("/check");
    },
    toBackstage(){
      this.$router.push("/backstage")
    }
  },
  mounted:function(){
    // wxshare(this)
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top {
  margin-top: 15%;
}
.btns {
  text-align: center;
  width: 100%;
}
.btns .el-button {
  margin: 4.4% auto;
}
.bottom {
  display: flex;
  flex-direction: column;
  z-index: 5;
  margin-bottom: 20%;
}
.bg {
  text-align: center;
  background-color: #f2f7dc;
  position: absolute;
  bottom: 0;
  height: 100%;
}
.bottom-pic {
  position: absolute;
  bottom: 0;
}
.bottom-pic img {
  width: 100%;
  vertical-align: bottom;
}
.el-button {
  border: #89c997 solid 1px;
  color: #89c997;
  background-color: transparent;
  width: 43%;
  border-radius: 9pt;
}
.el-button:hover {
  background-color: #89c997;
  color: #ffffff;
  outline:none;
}
.href{
  color:white;
  position: relative;
  bottom:2%;
  font-size: 12px;
  z-index: 3;
}
</style>