//button hover 未完成
<template>
  <div class="home bg">
    <div class="top btns">
      <div class="top-pic">
        <img src="../assets/2-1.png" style="width:50.8%;" />
      </div>
      <div class="container" @click="toGame">
        <!-- <div class="tizai"> -->
          <img src="../assets/2-2.png" style="width:34.6%;flex:0.1 0 1px" />
        <!-- </div> -->
        <div class="text-pic">
          <img src="../assets/2-5.png" style="width:30%" />
          <img src="../assets/2-3.png" style="width:64.5%;padding-left:2.5%;" />
        </div>
      </div>
    </div>
    <div class="bottom btns">
      <el-button :autofocus=true @click="toSignup">开始报名</el-button>
      <el-button @click="toIntroduction">部门介绍</el-button>
      <el-button @click="toCheck">查看报名</el-button>
    </div>
    <!-- <div class="href" @click="toBackstage">内部查询请点击此处</div> -->
    <div class="bottom-pic">
      <img src="../assets/3.png" />
    </div>
  </div>
</template>

<script>
import { wxshare } from "../api/api";
export default {
  name: "home",
  methods: {
    toSignup() {
      this.$router.push("/signup");
    },
    toIntroduction() {
      this.$router.push("/bbt");
    },
    toCheck() {
      this.$router.push("/check");
    },
    toBackstage() {
      this.$router.push("/backstage");
    },
    toGame(){
      window.location.href="https://hemc.100steps.net/2019/autumn-recruit/game.html"
    }
  },
  mounted: function() {
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
.top-pic {
  margin-top: 11.8%;
}
.home .container {
  display: flex;
  justify-content: center;
  width: 60%;
  margin: auto;
  height: 112.8px !important;
}
.home .text-pic {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.btns {
  text-align: center;
  width: 100%;
  z-index: 35;
}
.btns .el-button {
  margin: 2.4% auto;
}
.bottom {
  display: flex;
  flex-direction: column;
  z-index: 5;
  margin-bottom: 23.5%;
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
  width: 42.8%;
  height: 4.8%;
  border-radius: 9pt;
}
.el-button:hover,.el-button:focus,.el-button:active {
  background-color: #89c997;
  color: #ffffff;
  outline: none;
}
</style>