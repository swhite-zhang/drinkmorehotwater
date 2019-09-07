//login.js
const util = require("../../utils/util.js");

Page({
  data: {
    personName: "",
    personNum: 0
  },
  inputName: function(name) {
    this.setData({ personName: name.detail.value });
  },
  inputNum: function(num) {
    this.setData({ personNum: num.detail.value });
  },
  next: function() {
    wx.navigateTo({
      url: ("../homePage/homePage?name="+this.data.personName+"&num="+this.data.personNum)
    });
  },
  onLoad: function(e) {}
});
