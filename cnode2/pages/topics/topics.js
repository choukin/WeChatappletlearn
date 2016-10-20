var APi = require('../../utils/api.js');
Page({
  data:{
    // text:"这是一个页面"
    title:'首页列表',
    hidden:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数 
    console.log("onLoad by topics")
    this.fetchData();
  },
  fetchData: function(data){
      var _this = this;
        if(!data) data = {};
        if(!data.page)data.page=1;
        wx.request({
            url:APi.getTopics(data),
            success:function(res){
                console.log(res);
                _this.setData({
                    hidden:true,
                    postsList:res.data.data
                })
            }    

        })
  },
  onTaptag:function(e){
     var _this = this;
     var tab = e.currentTarget.id;
     _this.setData({
       tab:tab
     })

     if(tab !== 'all'){
       _this.fetchData({tab:tab})
     }else{
       _this.fetchData();
     }
  },
  //滚动请求下一页数据
  lower: function(e){
    var _this = this;
    //修改当前页码码
    _this.setData({
      page:_this.data.page + 1
    })


    //判断当前页的tab值 进行请求数据数据
    if(_this.data.tab !== 'all'){
      this.fetchData({tab:_this.data.tab,page:_this.data.page})
    }else{
      this.fetchData({page:_this.data.page});
    }

  },
  //跳转到详情页面
  redictDetail:function(e){
    
    var id = e.currentTarget.id,
        url = '../detail/detail?id='+id;
        //这里的detail是需要创建对应的文件文件，以及页面注册注册
        wx.navigateTo({
          url:url
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