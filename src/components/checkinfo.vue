<template>
  <div class="bg">
    <h1>信息填写：</h1>
    <div class="checkinfo">
      <el-form label-position="left" label-width="20%" :model="signup">
        <el-form-item label="姓名">
          <el-input v-model="signup.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="signup.sex" placeholder="请选择"  style="width:100%">
            <el-option
              v-for="item in sex"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年级">
          <el-select v-model="signup.grade" placeholder="请选择"  style="width:100%">
            <el-option
              v-for="item in grade"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="校区">
          <el-select v-model="signup.area" placeholder="请选择" @change="changeArea(signup.area)"  style="width:100%">
            <el-option
              v-for="item in area"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学院">
          <el-select v-model="signup.school" placeholder="请选择"  style="width:100%">
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
        <el-form-item label="第一志愿">
          <el-select v-model="signup.first" placeholder="请选择"  style="width:100%">
            <el-option
              v-for="item in departments"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="第二志愿">
          <el-select v-model="signup.second" placeholder="请选择"  style="width:100%">
            <el-option
              v-for="item in departments"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否服从调剂">
          <el-select v-model="signup.adjust"  style="width:100%">
            <el-option
              v-for="item in adjustment"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="自我介绍">
          <el-input type="textarea" v-model="signup.description" maxlength="50"></el-input>
        </el-form-item>
        <!-- <el-form-item> -->
        <div class="button">
          <div class="errmsg" v-show="showerr">{{errmsg}}</div>
          <el-button @click="onChange">修改</el-button>
          <el-button @click="toHome">返回</el-button>
        </div>
        <!-- </el-form-item> -->
      </el-form>
    </div>
    <div class="bottom">
      <img src="../../public/static/3.png" style="width:100%;vertical-align: bottom;" />
    </div>
  </div>
</template>

<script>
export default {
  name: "checkinfo",
  data() {
    return {
      signup: {
        name: "",
        sex: "",
        grade: "",
        area: "",
        school: "",
        dormitory: "",
        phone: "",
        first: "",
        second: "",
        adjust: "",
        description: ""
      },
      sex: [
        {
          value: "男",
          label: "男"
        },
        {
          value: "女",
          label: "女"
        }
      ],
      grade: [
        {
          value: "大一",
          label: "大一"
        },
        {
          value: "大二",
          label: "大二"
        },
        {
          value: "大三",
          label: "大三"
        },
        {
          value: "大四",
          label: "大四"
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
      departments: [
        {
          value: "",
          label: ""
        }
      ],
      schools: [
        {
          value: "",
          label: ""
        }
      ],
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
    var username = this.$route.params.username;
    var phone = this.$route.params.phone;
    var check = new FormData();
    check.append("username", username);
    check.append("phone", phone);
    this.$axios
      .post("http://111.230.183.100:5000/information", check, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      .then(response => {
        var res = response.data;
        if (res.errcode == 1) {
          var data = response.data.data;
          this.signup.name = data.username;
          this.signup.sex = data.sex;
          this.signup.grade = data.grade;
          this.signup.area = data.area;
          this.signup.dormitory = data.dormitory;
          this.signup.school = data.school;
          this.signup.first = data.first;
          this.signup.second = data.second;
          this.signup.phone = data.phone;
          this.signup.adjust = data.adjust;
          this.signup.description = data.description;
        } else {
          console.log(res);
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios
      .get("http://111.230.183.100:5000/school", {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
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
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    onChange() {
      var data = new FormData();
      data.append("username", this.signup.name);
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
        .post("http://111.230.183.100:5000/modify", data, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        })
        .then(response => {
          var res = response.data;
          if (res.errcode == 1) {
            this.$router.push({
              name: "success",
              params: { status: "修改" }
            });
          } else {
            this.showerr = true;
            this.errmsg = res.errmsg;
            console.log(response);
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
.bg h1 {
  text-align: left;
  margin-top: 10%;
}
.bg {
  background-color: #f2f7dc;
  position: absolute;
  width: 100%;
}

.checkinfo {
  width: 85%;
  margin: 20% auto;
  z-index: 200;
}
.button {
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.errmsg {
  color: red;
  font-size: 10px;
  margin: 3%;
}
.bg .checkinfo .button button {
  margin: 5% auto;
  width: 60%;
  z-index: 200;
}
</style>