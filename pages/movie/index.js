//https://zhaorq7.github.io/mpResource309/data.json
Page({
  data:{
    tabIndex:'hots',
    //热应列表
    hots:[]
  },
  switch:function(ev){
    //更新数据
    // console.log(ev.target.dataset.tabIndex);
    this.setData({
      tabIndex:ev.target.dataset.tabIndex
    })
  },
  onLoad:function(){

    var _this = this;
    //发起请求

    wx.request({
      url: 'https://wx.maoyan.com/mmdb/movie/v2/list/hot.json',
      data:{
        limit:12,
        offset:0,
        ct:'北京'
      },
      success:function(info){
        info.data.data.hot[0] = {"bingeWatch":0,"boxInfo":"上映12天, 累计票房221564万","cat":"剧情,传记","civilPubSt":0,"desc":"主演:张涵予,欧豪,杜江","dir":"刘伟强","dur":111,"effectShowNum":0,"id":1230121,"img":"http://p0.meituan.net/w.h/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg","mk":9.4,"nm":"中国机长","movieType":0,"pn":427,"showInfo":"今天227家影院放映3193场","showTimeInfo":"2020-05-01上映"};

        info.data.data.hot[1] = {"bingeWatch":0,"boxInfo":"上映12天, 累计票房221564万","cat":"剧情,传记","civilPubSt":0,"desc":"主演:张涵予,欧豪,杜江","dir":"刘伟强","dur":111,"effectShowNum":0,"id":1230121,"img":"http://p0.meituan.net/w.h/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg","mk":9.4,"nm":"中国机长2","movieType":0,"pn":427,"showInfo":"今天227家影院放映3193场","showTimeInfo":"2020-05-01上映"};
          console.log(info.data.data.hot);

          //处理img
          info.data.data.hot.forEach(function(val){
              // console.log(val.img);
              val.img = val.img.replace('w.h','128.180')
              
          })


          // 更新数据
          _this.setData({
            hots: info.data.data.hot
          })

          console.log(_this.data.hots);
          
      }
    })
  }
});