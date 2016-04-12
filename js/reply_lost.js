/**
 * Created by jinlei on 16/4/12.
 */
var ele=document.getElementsByClassName('text')[0];
autoTextarea(ele);
var main={
    addImage:function(){
        $('.trans_icon').click(function () {
           $("<div class='placeholder fl container append'><img src='http://ww1.sinaimg.cn/mw690/4c56dd36jw1f2lslkfi3uj22c03404qr.jpg'> <del class='del'><img src='image/h5/picDelete@2x.png'></del></div>").insertBefore('.trans_icon');
           var len=$('.append').length;
           if(len>8){
             $(this).attr('disabled',true);
           }else {
               $(this).attr('disabled',false);
           }
        });
    },
    deleteImage: function () {
        $('.trans_image').on('click','.del',function () {
            $(this).parent().remove();
            var len=$('.append').length;
            if(len>8){
                $('.trans_icon').attr('disabled',true);
            }else {
                $('.trans_icon').attr('disabled',false);
            }
        })
    },
    init:function (){
        this.addImage();
        this.deleteImage();
    }
}
$(function () {
    main.init();

})