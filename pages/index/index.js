//index.js
//获取应用实例
var app = getApp();

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    getNum: false,
    getName: false
  },
  //事件处理函数
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  inputName: function(name) {
    this.setData({
      personName: name.detail.value
    });
    if (this.data.personName) {
      this.setData({ getName: true });
    } else {
      this.setData({ getName: false });
    }
    this.onLoad();
  },
  inputNum: function(num) {
    this.setData({
      personNum: num.detail.value
    });
    if (this.data.personNum) {
      this.setData({ getNum: true });
    } else {
      this.setData({ getNum: false });
    }
    this.onLoad();
  },
  next: function() {
    wx.navigateTo({
      url:
        "../homePage/homePage?name=" +
        this.data.personName +
        "&num=" +
        this.data.personNum
    });
    this.onLoad();
  },
  openConfirm: function() {
    if (!this.data.getName || !this.data.getNum) {
      var cont = "";
      if (this.data.getName) {
        cont = "请输入学号";
      } else if (this.data.getNum) {
        cont = "请输入姓名";
      } else {
        cont = "请输入姓名和学号";
      }
      wx.showModal({
        title: "弹窗标题",
        content: cont,
        //confirmText: "主操作",
        //cancelText: "辅助操作",
        showCancel: false,
        success: function(res) {
          console.log(res);
          if (res.confirm) {
            console.log("用户点击主操作");
          } else {
            console.log("用户点击辅助操作");
          }
        }
      });
    }
    this.onLoad();
  }
});
