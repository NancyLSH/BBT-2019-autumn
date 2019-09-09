<template>
  <div class="check">
    <h1>查看报名</h1>
    <el-form label-position="left" label-width="20%" :model="check">
      <el-form-item label="手机号">
        <el-input v-model="check.phone" maxlength="11" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="check.username"></el-input>
      </el-form-item>
      <div class="btn">
        <div class="errmsg" v-show="showerr">{{errmsg}}</div>
        <el-button @click="onCheck">点击查看</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "check",
  data() {
    return {
      check: {
        phone: "",
        username: ""
      },
      showerr: false,
      errmsg: ""
    };
  },
  methods: {
    onCheck() {
      var data = new FormData();
      data.append("username", this.check.username);
      data.append("phone", this.check.phone);
      this.$axios
        .post("http://111.230.183.100:5000/judgeRecruit", data, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        })
        .then(response => {
          console.log(response);
          var res = response.data;
          if (res.errcode === 1) {
            this.$router.push({
              name: "checkinfo",
              params: {
                username: this.check.username,
                phone: this.check.phone
              }
            });
          }
          if (res.errcode == 0) {
            this.$router.push("/nosignup");
            console.log(res.data);
          }
          if (res.errcode == -1) {
            this.showerr = true;
            this.errmsg = res.errmsg;
            console.log(res.errmsg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 5% 0;
  text-align: center;
}
form {
  margin: 20% auto;
  width: 80%;
}
.btn {
  text-align: center;
}
.errmsg {
  color: red;
  font-size: 10px;
  margin: 3%;
}
</style>