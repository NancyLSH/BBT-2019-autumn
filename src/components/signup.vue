<template>
  <div class="bg">
    <h2>信息填写</h2>
    <div class="signup">
      <el-form label-position="left" label-width="20%" :model="signup">
        <el-form-item label="姓名">
          <el-input v-model="signup.username"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="signup.sex" label="男">男</el-radio>
          <el-radio v-model="signup.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="年级">
          <el-select v-model="signup.grade" style="width:100%">
            <el-option
              v-for="item in grade"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="校区">
          <el-select v-model="signup.area" @change="changeArea(signup.area)" style="width:100%">
            <el-option
              v-for="item in area"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学院">
          <el-select v-model="signup.school" style="width:100%">
            <el-option
              v-for="item in schools"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="宿舍">
          <el-input placeholder="Cx-xxx/西x-xxx" v-model="signup.dormitory"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="signup.phone" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="第一志愿" label-width="30%">
          <el-select v-model="signup.first" style="width:100%;float:right">
            <el-option
              v-for="item in departments"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="第二志愿" label-width="30%">
          <el-select v-model="signup.second" style="width:100%;float:right">
            <el-option
              v-for="item in departments"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否服从调剂" label-width="40%">
          <el-select v-model="signup.adjust" style="width:100%">
            <el-option
              v-for="item in adjustment"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label-width="0%" style="display:flex;flex-direction:column;">
          <div style="font-size:18px;color:#8c523b">自我介绍</div>
          <el-input
            type="textarea"
            placeholder="不得多于50字噢"
            v-model="signup.description"
            maxlength="50"
            style="width:100%"
          ></el-input>
        </el-form-item>
        <div class="button">
          <div v-show="showerr" class="errmsg">{{errmsg}}</div>
          <el-button @click="onSubmit">提交</el-button>
        </div>
      </el-form>
    </div>
    <div class="bottom-pic">
      <img src="../assets/3.png" style="width:100%;vertical-align: bottom;" />
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
  data() {
    return {
      signup: {
        username: "",
        sex: "",
        grade: "大一",
        area: "",
        school: "",
        dormitory: "",
        phone: "",
        first: "",
        second: "",
        adjust: "",
        description: ""
      },
      sex: "",
      grade: [
        {
          value: "大一",
          label: "大一"
        }
      ],
      area: [
        {
          value: "南校",
          label: "南校"
        },
        {
          value: "北校",
          label: "北校"
        },
        {
          value: "国际校区",
          label: "国际校区"
        }
      ],
      departments: [],
      schools: [],
      adjustment: [
        {
          value: "是",
          label: "是"
        },
        {
          value: "否",
          label: "否"
        }
      ],
      showerr: false,
      errmsg: ""
    };
  },
  mounted: function() {
    // wxshare(this)
  },
  methods: {
    changeArea(area) {
      console.log(area);
      var data = new FormData();
      data.append("area", area);
      this.$axios
        .post(host + "/department", data, header)
        .then(response => {
          if (response.data.errcode == 1) {
            var arr = response.data.data;
            var jsonArr = new Array();
            for (var i = 0; i < arr.length; i++) {
              jsonArr[i] = {};
              jsonArr[i]["value"] = i;
              jsonArr[i]["label"] = arr[i];
            }
            var newArr = jsonArr.map(val => {
              let json = {};
              json.value = val.label;
              json.label = val.label;
              return json;
            });
            this.departments = newArr;
          }
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
      this.$axios
        .post(host + "/school", data, header)
        .then(response => {
          if (response.data.errcode == 1) {
            //获取数据后先格式化,for循环的性能不如map()好
            var arr = response.data.data;
            //第一遍for循环，把数组转为json数组
            var jsonArr = new Array();
            for (var i = 0; i < arr.length; i++) {
              jsonArr[i] = {};
              jsonArr[i]["value"] = i;
              jsonArr[i]["label"] = arr[i];
            }
            //第二遍使用map()将数据传入this.schools中
            var newArr = jsonArr.map(val => {
              let json = {};
              json.value = val.label;
              json.label = val.label;
              return json;
            });
            this.schools = newArr;
          } else {
            console.log("some err");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onSubmit() {
      var data = new FormData();
      data.append("username", this.signup.username);
      data.append("sex", this.signup.sex);
      data.append("grade", this.signup.grade);
      data.append("area", this.signup.area);
      data.append("school", this.signup.school);
      data.append("dormitory", this.signup.dormitory);
      data.append("first", this.signup.first);
      data.append("second", this.signup.second);
      data.append("phone", this.signup.phone);
      data.append("adjust", this.signup.adjust);
      data.append("description", this.signup.description);
      this.$axios
        .post(host + "/recruit", data, header)
        .then(response => {
          console.log(response);
          var res = response.data;
          if (res.errcode === 1) {
            this.$router.push({
              name: "success",
              params: { status: "报名" }
            });
          } else {
            this.showerr = true;
            this.errmsg = res.errmsg;
            console.log(res.errmag);
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
.bg {
  background-color: #f2f7dc;
}
.signup {
  width: 85%;
  margin: 10% auto;
}
.el-form-item__label,
.el-select .el-input .el-select__caret {
  color: #8c523b;
  font-size: 18px;
}
.bg h2 {
  font-weight: 100;
  text-align: left;
  color: #8c523b;
  padding-top: 10%;
  padding-left: 6%;
}
.button {
  margin: 0;
  text-align: center;
}
.errmsg {
  color: red;
  font-size: 10px;
  margin: 3%;
}
.el-input input,
.el-textarea textarea,
.el-radio .el-radio__inner {
  background-color: transparent;
  border: #996148 dashed 1.6px;
  border-radius: 9pt;
  color: #996148;
}
.el-radio .el-radio__label {
  color: #996148;
  font-size: 15px;
}
.el-textarea textarea {
  width: 100%;
  margin-left: 0;
  height: 100px;
}
.signup .button button {
  margin: auto;
  width: 60%;
  margin-top: 15%;
}
.el-button {
  border: #89c997 solid 1px;
  color: #89c997;
  background-color: transparent;
  width: 60%;
  border-radius: 9pt;
}
.el-button:hover {
  background-color: #89c997;
  color: #ffffff;
  outline: none;
}
.el-form-item__content {
  margin-left: 0;
}
.el-input input::placeholder,
.el-textarea textarea::placeholder {
  color: #d2c5ad;
}
</style>