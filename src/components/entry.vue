<template>
  <div class="bottom" @click="toHome">
    <img class="bbt" src="../assets/1-1.png" />
    <img class="calendar" src="../assets/1-3.png" />
    <div class="bottom-pic">
      <img src="../assets/1-2.png" style="vertical-align: bottom;" />
    </div>
    <div class="tip">
      <div>轻触屏幕跳转</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "entry",
  methods: {
    toHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.bottom {
  text-align: center;
  background-color: #f2f7dc;
  position: absolute;
  bottom: 0;
  height: 100%;
  /* 为什么100%出现滚动条,app本身有自带的margin，用*{}去掉即可 */
}
.tip {
  z-index: 2;
  position: absolute;
  bottom: 4%;
  left: 30%;
  width: 40%;
  background-color: #f2f7dc26;
  color: #fbfbfb;
  border-radius: 18pt;
}
.bottom,
.bottom-pic img {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.bbt {
  width: 24%;
  position: absolute;
  left: 15%;
  top: 3%;
  z-index: 5;
}
.calendar {
  position: absolute;
  width: 50%;
  right: 5%;
}
</style>