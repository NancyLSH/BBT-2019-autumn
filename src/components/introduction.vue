<template>
  <div class="introduction">
    <div class="container">
      <div class="inner">
        <el-button type="info" @click="toDetail(1)">外联部</el-button>
        <el-button type="info" @click="toDetail(2)">节目部</el-button>
        <el-button type="info" @click="toDetail(3)">人力资源部</el-button>
        <el-button type="info" @click="toDetail(4)">编辑部</el-button>
        <el-button type="info" @click="toDetail(5)">综合新闻部</el-button>
        <el-button type="info" @click="toDetail(6)">综合管理部</el-button>
        <el-button type="info" @click="toDetail(7)">策划推广部</el-button>
        <el-button type="info" @click="toDetail(8)">视觉设计部</el-button>
        <el-button type="info" @click="toDetail(9)">技术部</el-button>
        <el-button type="info" @click="toDetail(10)">视频部</el-button>
      </div>
    </div>
    <div class="bottom-pic">
      <img src="../assets/3.png" style="width:100%;vertical-align: bottom;" />
    </div>
  </div>
</template>

<script>
import { wxshare } from "../api/api";
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
  },
  mounted: function() {
    // wxshare(this)
  }
};
</script>

<style>
/* element组件与sibling兄弟选择器的问题 */
.introduction {
  background-color: #f2f7dc;
}
.introduction .container {
  height: 500px;
  width: 100%;
  padding-top: 12.7%;
    overflow: scroll;
}
.introduction .container .inner{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-button--info {
  margin: 20px auto;
  width: 50%;
}
.el-button {
  border: #89c997 solid 1px;
  color: #89c997;
  background-color: transparent;
  width: 50%;
  border-radius: 9pt;
  margin-left: auto !important;
}
.el-button:hover {
  background-color: #89c997;
  color: #ffffff;
  outline: none;
}
</style>