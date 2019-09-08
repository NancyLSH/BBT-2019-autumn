<template>
  <div class="home">
    <div class="top btns">
      <el-button>点击进入游戏</el-button>
    </div>
    <div class="bottom btns">
      <el-button @click="toSignup">开始报名</el-button>
      <el-button @click="toIntroduction">部门介绍</el-button>
      <el-button @click="toCheck">查看报名</el-button>
    </div>
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.btns {
  text-align: center;
  margin: 25% auto;
}
.btns .el-button {
  margin: 10% auto;
}
.bottom {
  display: flex;
  flex-direction: column;
}
</style>