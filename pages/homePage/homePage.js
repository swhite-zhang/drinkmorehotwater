//homePage.js


Page({
  data: {
    name:"",
    num:0
  },
  //事件处理函数

  onLoad: function (option) {
      this.setData({
          name:option.name,
          num:option.num
    })
  }

})
