<template>
  <div class="check">
    <h1>查看报名</h1>
    <el-form label-position="left" label-width="25%" :model="check">
      <el-form-item label="手机号">
        <el-input v-model="check.phone" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="check.username"></el-input>
      </el-form-item>
      <div class="btn">
        <div class="errmsg" v-show="showerr">{{ errmsg }}</div>
        <el-button @click="onCheck">点击查看</el-button>
      </div>
    </el-form>
    <div class="check-pic">
      <img
        src="../../src/assets/3.png"
        style="width:100%;vertical-align: bottom;"
      />
    </div>
  </div>
</template>

<script>
import { host, wxshare } from "../api/api";
const header = {
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
};
export default {
  name: "check",
  data() {
    return {
      check: {
        phone: "",
        username: ""
      },
      showerr: false,
      errmsg: "",
      canRequest: true
    };
  },
  methods: {
    onCheck() {
      if (!this.canRequest) return;
      this.canRequest = false;
      var data = new FormData();
      data.append("username", this.check.username);
      data.append("phone", this.check.phone);
      this.$axios
        .post(host + "/judgeRecruit", data, header)
        .then(response => {
          console.log(response);
          this.canRequest = true;
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
          this.canRequest = true;
          console.log(err);
        });
    },
    mounted: function() {
      wxshare(this);
    }
  }
};
</script>

<style>
.check {
  background-color: #f2f7dc;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}
.check h1 {
  text-align: left;
  color: #8c523b;
  padding-top: 10%;
  padding-left: 0%;
  margin-top: 20%;
}
.check form {
  margin: 10% auto;
  width: 80%;
}
.check .btn {
  text-align: center;
}
.errmsg {
  color: red;
  font-size: 10px;
  margin: 3%;
}
.bottom {
  position: absolute;
  bottom: 0;
}
.check .check-pic {
  position: relative;
  top: 10%;
  background-clip: #f2f7dc;
}
.check .btn {
  margin-top: 10%;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: 0%;
}
.check .btn button {
  margin: auto;
}
</style>


