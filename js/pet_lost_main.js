/**
 * Created by jinlei on 16/4/10.
 */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30
});

var main={
  getBanner:function (){
      var data={};
      data.accessToken=accessToken;
      data.lon=121.39;
      data.lat=31.17;
      data=JSON.stringify(data);
      console.log(data);
      Net.getPetlist(data,function(res){

      });
  },
  getListFound: function () {
      var data={};
      data.accessToken=accessToken;
      data.lon=121.39;
      data.lat=31.17;
  },

  init:function(){
      this.getBanner();
  }
};
$(function () {
    main.init();
});