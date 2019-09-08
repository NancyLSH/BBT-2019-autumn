<template>
  <div class="introduction">
    <el-button type="info" @click="toDetail(0)">百步梯介绍</el-button>
    <el-button type="info" @click="toDetail(1)">外联部介绍</el-button>
    <el-button type="info" @click="toDetail(2)">节目部介绍</el-button>
    <el-button type="info" @click="toDetail(3)">人力资源部介绍</el-button>
    <el-button type="info" @click="toDetail(4)">编辑部介绍</el-button>
    <el-button type="info" @click="toDetail(5)">综合新闻部介绍</el-button>
    <el-button type="info" @click="toDetail(6)">综合管理部介绍</el-button>
    <el-button type="info" @click="toDetail(7)">策划推广部介绍</el-button>
    <el-button type="info" @click="toDetail(8)">视觉设计部介绍</el-button>
    <el-button type="info" @click="toDetail(9)">技术部介绍</el-button>
    <el-button type="info" @click="toDetail(10)">视频部介绍</el-button>
  </div>
</template>

<script>
export default {
  name: "introduction",
  methods: {
    toDetail(i) {
      this.$router.push({
        name: "detail",
        params: {
          i: i
        }
      });
    }
  }
};
</script>

<style>
/* element组件与sibling兄弟选择器的问题 */
.introduction {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-button--info {
  margin: 20px auto;
  width: 40%;
}
.el-button + .el-button {
  margin-left: auto;
}
</style>