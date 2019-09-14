<template>
  <div class="check">
    <h1>查看报名</h1>
    <el-form label-position="left" label-width="20%" :model="check">
      <el-form-item label="手机号">
        <el-input v-model="check.phone" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="check.username"></el-input>
      </el-form-item>
      <div class="btn">
        <div class="errmsg" v-show="showerr">{{errmsg}}</div>
        <el-button @click="onCheck">点击查看</el-button>
      </div>
    </el-form>
    <div class="bottom">
      <img src="../../public/static/3.png" style="width:100%;vertical-align: bottom;" />
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
      errmsg: ""
    };
  },
  methods: {
    onCheck() {
      var data = new FormData();
      data.append("username", this.check.username);
      data.append("phone", this.check.phone);
      this.$axios
        .post(host + "/judgeRecruit", data, header)
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
    },
    mounted:function(){
      // wxshare(this)
    }
  }
};
</script>

<style>
.check {
  background-color: #f2f7dc;
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
}
.check h1 {
  text-align: left;
  color: #8c523b;
  padding-top: 10%;
  padding-left: 10%;
  margin-top: 25%;
}
.check form {
  margin: 20% auto;
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
.check .btn {
  margin-top: 25%;
}
.check .btn button {
  margin: auto;
}
</style>


