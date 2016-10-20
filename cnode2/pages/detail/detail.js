var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
Page({
  data:{
    // text:"这是一个页面"
    title:'话题详情',
    detail:{},
    hidden:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.fetchData(options.id)
  },
  fetchData:function(id){
      var _this = this;
      wx.request({
          url:Api.getTopicByID(id,{mdrender:false}),
          success:function(res){
              console.log(res);
              _this.setData({
                  detail:res.data.data,
                  hidden:true
              })
          }
      })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})