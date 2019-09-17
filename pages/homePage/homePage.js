//homePage.js

var app = getApp();

Page({
  data: {
    name: "",
    num: 0,
    userInfo: {},
    hasUserInfo: false,
    book: [
      { name: "平凡的世界", time: "2019-09-12", status: "未还" },
      { name: "C语言程序设计", time: "2019-03-23", status: "已还" }
    ],
    color: { f: "green", s: "black" },
    home: true,
    inputShowed: false,
    inputVal: "",
    searchRecord:["三体","推荐算法实践","C++ Primer"]
  },
  //事件处理函数

  onLoad: function(option) {
    this.setData({
      name: option.name,
      num: option.num,
      userInfo: app.globalData.userInfo
    });
  },

  onShow: function() {},

  changeInterF: function() {
    this.setData({ color: { f: "green", s: "black" }, home: true });
    this.onShow();
  },

  changeInterS: function() {
    this.setData({ color: { f: "black", s: "green" }, home: false });
    this.onShow();
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});
