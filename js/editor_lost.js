/**
 * Created by jinlei on 16/4/5.
 */
var main={
    addImage: function () {
        $('.trans_icon').click(function () {
            $(this).removeClass('middle');
            $(this).addClass('fl');
            $("<div class='placeholder fl container mr append'><img src='http://ww1.sinaimg.cn/mw690/4c56dd36jw1f2lslkfi3uj22c03404qr.jpg'> <del class='del'><img src='image/h5/picDelete@2x.png'></del></div>").insertBefore('.trans_icon');
            var len=$('.append').length;
            if(len>8){
                $(this).attr('disabled',true);
            }else {
                $(this).attr('disabled',false);
            }
        });
    },
    deleteImage: function () {
        $('.pet_image').on('click','.del',function () {
            $(this).parent().remove();
            var len=$('.append').length;
            if(len==0){
                $('.trans_icon').removeClass('fl mr');
                $('.trans_icon').addClass('middle');
            }else if(len>8){
                $('.trans_icon').attr('disabled',true);
            }else {
                $('.trans_icon').attr('disabled',false);
            }
        })
    },
    getTag: function () {
        Net.getTags(function(res){
            for(var i=0;i<res.data.length;i++){
                $('.other_info').append("<span class='lable_circle'>"+res.data[i]+"</span>");
            }
        });
    },
    selectTag: function () {
        $('.other_info').on('click','.lable_circle',function () {
            $(this).toggleClass('tag');
        });
    },
    selectValue: function (id) {
        var ele=$('#'+id);
        ele.on('change', function () {
            $(this).parent().find('.name_s').text(ele.val());
        });
    },
    selectAnimal: function () {
        $('.pet_head').click(function () {
            $(this).addClass('color');
            $(this).siblings('.pet_head').removeClass('color');
        });
    },
    autoTextarea: function (ele) {
        var ele=document.getElementById(ele);
        autoTextarea(ele);
    },
    //让输入框不要被键盘挡住
    autoText: function () {
        $("#textarea").focus(function(){
            setTimeout(function(){
                $(window).scrollTop($(window).height()+150);
            },100);
        });
    },
    lost_post: function () {
        var data = {};
        data.accessToken = accessToken;
        data.category = 'cat';
        data.breed = 'Golden Hair111';
        data.color = 'Black';
        data.sizeDown = 110;
        data.sizeUp = 120;
        data.imageKeys = ['289182918','dhahdjahjd'];
        data.tags = ['读卡贷记卡看','到家啊框架大卡接口'];
        data.address = "上海市莲花路1758号";
        data.time = new Date().getTime();
        data.desc = "超市门口走失";
        data.name = "金磊";
        data.contact = ['13259998176'];
        data.lon=10;
        data.lat=100;
        data=JSON.stringify(data);
        $('.submit').bind('click', function () {
            Net.post_lost(data, function (res) {

            });
        });
    }
    ,
    submitInfo: function () {
        $('.submit').bind('click', function () {
            var category='cat';
            var breed=$('#variety').val();
            var color=$('#hair_color').val();
            var height=$('#height').val();
            console.log(category);
            console.log(breed);
            console.log(color);
            console.log(height);

        });
    },
    init: function () {
        this.autoText();
        this.autoTextarea('textarea');
        this.addImage();
        this.deleteImage();
        this.getTag();
        this.selectTag();
        this.selectValue('variety');
        this.selectValue('hair_color');
        this.selectValue('height');
        this.selectAnimal();
        this.lost_post();
        this.submitInfo();
    }
};
$(function () {
   main.init();
});
