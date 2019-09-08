<template>
  <div class="bottom">
    <el-button @click="toHome">点击进入</el-button>
  </div>
</template>

<script>
export default {
    name:'entry',
    methods:{
        toHome(){
            this.$router.push('/home')
        }
    }
};
</script>

<style scoped>
.bottom {
  text-align: center;
  position: absolute;
  top: 85%;
  width: 100%;
  /* 为什么100%出现滚动条,app本身有自带的margin，用*{}去掉即可 */
}
</style>