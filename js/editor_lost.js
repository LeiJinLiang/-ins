/**
 * Created by jinlei on 16/4/5.
 */
$('.part1').find('li').on('click', function () {
   $(this).find('.chose').removeClass('hidden');
    $(this).find('.name').addClass('hidden');
});
$('.part1').find('.chose').on('change', function () {
    $(this).addClass('hidden');
    $(this).siblings('.name').removeClass('hidden');
});
$('.part1').find('.chose').on('blur', function () {
    $(this).addClass('hidden');
    $(this).siblings('.name').removeClass('hidden');
});
$(".textarea").focus(function(){
    setTimeout(function(){
        $(window).scrollTop(700);
    },100);
});
$('header').find('.pet_head').bind('click', function () {
   $(this).addClass('color');
   $(this).siblings('.pet_head').removeClass('color');
});

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
    init: function () {
        this.addImage();
        this.deleteImage();
    }
};
$(function () {
   main.init();
});