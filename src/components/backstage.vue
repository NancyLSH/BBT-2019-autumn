<template>
  <div class="backstage bg">
    <h1>内部查询</h1>
    <el-form label-position="left" label-width="80px" :model="check">
      <el-form-item label="部门">
        <el-input v-model="check.department" placeholder="请输入部门名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="check.password" show-password></el-input>
      </el-form-item>
      <div class="btn">
        <div class="errmsg" v-show="showerr">{{errmsg}}</div>
        <el-button @click="Backstage">查询</el-button>
      </div>
      <div class="bottom-pic">
        <img src="../../src/assets/3.png" style="width:100%;vertical-align: bottom;" />
      </div>
    </el-form>
  </div>
</template>

<script>
const header = {
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
};

import { host } from "../api/api";

export default {
  name: "backstage",
  data() {
    return {
      check: {
        department: "",
        password: ""
      },
      errmsg: "",
      showerr: false
    };
  },
  methods: {
    Backstage() {
      console.log(host);
      var data = new FormData();
      data.append("department", this.check.department);
      data.append("password", this.check.password);
      this.$axios
        .post(host + "/admin", data, header)
        .then(response => {
          var res = response.data;
          if (res.errcode == 1) {
            var data = res.data;
            console.log(data);
            this.$router.push({
              name: "backstageinfo",
              params: { data: data }
            });
          } else {
            this.showerr = true;
            this.errmsg = res.errmsg;
            console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.backstage {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
}
.backstage form {
  width: 85%;
  margin: auto;
  margin-top: 25%;
}
.backstage .btn button {
  margin: auto;
}
.backstage .btn {
  margin-bottom: 10%;
}
.backstage .bottom-pic {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>