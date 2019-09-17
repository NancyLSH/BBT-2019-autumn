<template>
  <div class="bbt-info bg">
    <div class="top-pic">
      <img src="../assets/2-1.png" style="width:190.6px" />
    </div>
    <div class="text-scroll">
      <div
        class="inner-text"
      >华南理工大学百步梯学生创新中心大学城校区新闻中心华南理工大学广播台（大学城校区）是一个在校团委指导下、以互联网和学生广播电台为主要工作平台的校级学生组织，百步梯致力于为华工师生提供各类生活资讯、新闻广播以及包括主页空间、网上视频、FTP资源共享在内的网络服务，同时以不同形式全力支持华工同学的创新活动。百步梯已发展成为华南地区最大的学生综合门户网站和一个优秀的校级学生组织。百步梯旗下现有四大媒体平台：百步梯网站（总站：www.100steps.net 大学城校区分站：south.100steps.net）、校园广播台、新浪微博（@华工百步梯 @华南理工大学城广播台 @华工视野）以及微信公众平台（微信订阅号：华工百步梯）。百步梯拥有三大校级活动：“雕刻时光”电影文化节、“爱上你主播”播音主持大赛以及“毕业季”文化节。三个品牌活动在学生群体中有深远的影响力，得到了校内外广大师生的肯定和支持。</div>
    </div>
    <div class="btn"><el-button @click="toIntroduction">跳过</el-button></div>
    <div class="bottom-pic"><img src="../assets/3.png" style="width:100%;vertical-align: bottom;"></div>
  </div>
</template>
<script>
export default {
  methods: {
    toIntroduction(){
        this.$router.push("/introduction")
    }
},  
};
</script>


<style>
.bbt-info {
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
.bbt-info .top-pic {
  margin-top: 21.6%;
  text-align: center;
}
.bbt-info .text-scroll {
  width: 71.5%;
  height: 35%;
  margin: auto;
  margin-top: 5%;
  color: #4c6255;
  overflow: scroll;
}
.bbt-info .btn button{
    text-align: center;
    margin: auto;
    width:57.8%
}
.bbt-info .bottom-pic{
    position: absolute;
    bottom: 0;
}
</style>