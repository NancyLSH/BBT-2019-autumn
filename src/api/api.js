import wx from 'weixin-js-sdk'

const host = "https://hemc.100steps.net/2019/recruit-autumn"

//config中的url
const index = "https://hemc.100steps.net/2019/autumn-recruit/index.html"
//微信分享配图
const pictureurl = "https://hemc.100steps.net/2019/autumn-recruit/static/post.jpg"
//微信分享链接
const link = 'https://hemc.100steps.net/2019/autumn-recruit/index.html'

function wxshare(a) {
    a.$axios
      .post(
        "https://hemc.100steps.net/2017/wechat/Home/Public/getJsApi",
        {
          url: index
        },
        {
          dataType: "JSON",
          withCredentials: true,
          crossDomain: true,
          contentType: "application/x-www-form-urlencoded",
        }
      )
      .then(res => {
        wx.config({
          debug: false,
          appId: res.appId,
          timestamp: res.timestamp,
          nonceStr: res.nonceStr,
          signature: res.signature,
          jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"]
        });
        wx.ready(function() {
          wx.updateTimelineShareData({
            title: "",
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: pictureurl,
            success: function() {
              console.log("success");
              // 设置成功
            }
          });
          wx.updateAppMessageShareData({
            title: "", // 分享标题
            desc: "", // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: pictureurl, // 分享图标
            success: function() {
              console.log("success");
              // 设置成功
            }
          });
        });
      });
}

export {host,wxshare};