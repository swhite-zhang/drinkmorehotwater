//homePage.js

var app = getApp();

Page({
  data: {
    name: "",
    num: 0,
    userInfo:"",
    hasUserInfo: false,
  },
  //事件处理函数

  onLoad: function(option) {
    this.setData({
      name: option.name,
      num: option.num,
      userInfo: app.globalData.userInfo,
    });
  }
});
