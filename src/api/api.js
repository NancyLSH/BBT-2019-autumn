import wx from 'weixin-js-sdk'
import $ from "jquery"

const host = "https://hemc.100steps.net/2019/recruit-autumn"

//config中的url
const index = "https://hemc.100steps.net/2019/autumn-recruit/index.html"
//微信分享配图
const pictureurl = "https://hemc.100steps.net/2019/autumn-recruit/static/post.jpg"
//微信分享链接
const link = 'https://hemc.100steps.net/2019/autumn-recruit/index.html'

function wxshare(a) {
  $.ajax({
    url: "https://hemc.100steps.net/2017/wechat/Home/Public/getJsApi",
    type: "post",
    dataType: "json",
    data: { url: location.href },
    success: function(arr) {
      wx.config({
        debug: false,
        appId: arr.appId,
        timestamp: arr.timestamp,
        nonceStr: arr.nonceStr,
        signature: arr.signature,
        jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"]
      });
      wx.ready(function() {
        wx.updateTimelineShareData({
          title: "秋季招新|拾级而上，遇见百步梯",
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: pictureurl,
          success: function() {
            console.log("success");
            // 设置成功
          }
        });
        wx.updateAppMessageShareData({
          title: "秋季招新|拾级而上，遇见百步梯", // 分享标题
          desc: "", // 分享描述
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: pictureurl, // 分享图标
          success: function() {
            console.log("success");
            // 设置成功
          }
        });
      });
    }
  });
  
}

export {host,wxshare};