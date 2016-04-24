/**
 * Created by jinlei on 16/4/6.
 */
var parmas = parseUrlParam(window.location.href);
var eventId=parmas.eventId;
var main={
    initSwiper: function () {
        var mySwiper = new Swiper('.vibanner', {
            autoplay: 3000,//可选选项，自动滑动
            direction : 'horizontal',
            loop:true,
            pagination: '.swiper-pagination'
        });
    },
    getBanner: function () {
        Net.getDetailInfo(function (res) {
            $('.addBanner').handlebars($('#banner-wrapper-tmp'),res[0].bannerImage);
            main.initSwiper();
            for(var i=0;i<res[0].lost_info.lost_tag.length;i++){
                $("<span class='lable_circle add_color'>"+res[0].lost_info.lost_tag[i]+"</span>").insertBefore(".lost_description");
            }
            $('.tips_info').find('.exact_time').text(res[0].lost_info.lost_time);
            $('.tips_info').find('.exact_loc').text(res[0].lost_info.lost_location);
            $('.host_lost_image').css("background-image","url("+res[0].lost_info.host_image+")");
            $('.host_detail').find('.name').text(res[0].lost_info.host_name);
            $('.host_detail').find('.publish_time').text(res[0].lost_info.publish_time);
            $('.lost_description').text(res[0].lost_info.lost_description);
        })
    },
    scrollInfo: function () {
        $("main").on('scroll', function (e) {
            if ($(this).scrollTop() + $(this).height() > $(this).height() + 20) {
                console.log("--瀑布流--");
            }
        });
    },
    getDetailBanner: function () {
       Net.getDetailBanner(accessToken,eventId, function (res) {
           console.log(res);
       });
    },
    getLostComment: function () {
      Net.getLostComment(accessToken,eventId,1, function (res) {
          
      });
    },
    postLostComment:function(){
       var data={};
       data.accessToken=accessToken;
       data.eventId=eventId;
       data.content="回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复";
       data=JSON.stringify(data);
       Net.postCommentLost(data, function (res) {
           
       });
    },
    getPostInfo: function () {
      Net.getPostInfo(eventId, function (res) {
          
      });
    },
    postUpdateLost: function () {
      var data={};
      data.accessToken=accessToken;
      data.eventId=eventId;
      data.desc="哈哈哈哈哈哈";
      data=JSON.stringify(data);
      Net.postUpdateLost(data, function (res) {
          
      });
    },
    init: function () {
        this.getDetailBanner();
        this.getBanner();
        this.scrollInfo();
        this.getLostComment();
        this.postLostComment();
        this.postUpdateLost();
        this.getPostInfo();
    }
}
$(function () {
    main.init();
})