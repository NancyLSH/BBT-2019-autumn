<template>
  <div class="backstageinfo">
    <el-table :data="signupData" height="100%" border style="width: 100%">
      <el-table-column fixed prop="username" label="姓名" width="120"></el-table-column>
      <el-table-column prop="sex" label="性别" width="100"></el-table-column>
      <el-table-column prop="grade" label="年级" width="100"></el-table-column>
      <el-table-column prop="area" label="校区" width="180"></el-table-column>
      <el-table-column prop="school" label="学院" width="200"></el-table-column>
      <el-table-column prop="phone" label="手机" width="200"></el-table-column>
      <el-table-column prop="first" label="第一志愿" width="200"></el-table-column>
      <el-table-column prop="second" label="第二志愿" width="200"></el-table-column>
      <el-table-column prop="adjust" label="是否服从调剂" width="100"></el-table-column>
      <el-table-column prop="description" label="自我介绍" width="300"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data(){
        return {
            signupData:[]
        }
    },
    mounted(){
        var data = this.$route.params.data
        console.log(data)
        this.signupData = data
    }
};
</script>

<style>
.backstageinfo{
    position: absolute;
    bottom:0;
    height: 100%;
    width: 100%;
}
</style>