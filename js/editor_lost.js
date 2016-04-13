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
    selectTag: function () {
        $('.lable_circle').on('click', function () {
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
    init: function () {
        this.autoText();
        this.autoTextarea('textarea');
        this.addImage();
        this.deleteImage();
        this.selectTag();
        this.selectValue('variety');
        this.selectValue('hair_color');
        this.selectValue('height');
        this.selectAnimal();
    }
};
$(function () {
   main.init();
});
