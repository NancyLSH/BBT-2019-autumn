<template>
  <div class="signup">
    <el-form label-position="left" label-width="20%" :model="signup">
      <el-form-item label="姓名">
        <el-input v-model="signup.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="signup.sex" placeholder="请选择">
          <el-option v-for="item in sex" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年级">
        <el-select v-model="signup.grade" placeholder="请选择">
          <el-option
            v-for="item in grade"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="校区">
        <el-select v-model="signup.area" placeholder="请选择" @change="changeArea(signup.area)">
          <el-option v-for="item in area" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学院">
        <el-select v-model="signup.school" placeholder="请选择">
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
        <el-input v-model="signup.phone" maxlength="11" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="第一志愿">
        <el-select v-model="signup.first" placeholder="请选择">
          <el-option
            v-for="item in departments"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="第二志愿">
        <el-select v-model="signup.second" placeholder="请选择">
          <el-option
            v-for="item in departments"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否服从调剂">
        <el-select v-model="signup.adjust">
          <el-option
            v-for="item in adjustment"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="自我介绍">
        <el-input type="textarea" v-model="signup.description" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <!-- <el-form-item> -->
        <div class="button">
          <el-button>提交</el-button>
        </div>
      <!-- </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
export default {
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
          value: 1,
          label: "男"
        },
        {
          value: 2,
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
      ]
    };
  },
  mounted: function() {
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
            json.value = val.value;
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
    changeArea(area) {
      console.log(area);
      var data = new FormData();
      data.append("area", area);
      this.$axios
        .post("http://111.230.183.100:5000/department", data, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        })
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
              json.value = val.value;
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
    }
  }
};
</script>

<style scoped>
.signup {
  width: 85%;
  margin: 10% auto;
}
.button {
  margin: 0;
  text-align: center;
}
</style>