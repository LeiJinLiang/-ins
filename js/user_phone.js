/**
 * Created by jinlei on 16/4/12.
 */
var main={
    check_Phone: function (ele) {
        var phone_number=$(ele).val();
        var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if(!(reg.test(phone_number))||phone_number.length==0){
            return false;
        }else{
            return true;
        }
    },
    init: function () {
        $('.phone').on('input',function () {
           var falg=main.check_Phone('.phone');
           if(!falg){
              $('.submit').attr('disabled',true);
              $('.submit').removeClass('undisabled');
              $('.submit').addClass('disabled');
           }else{
               $('.submit').attr('disabled',false);
               $('.submit').removeClass('disabled');
               $('.submit').addClass('undisabled');
           }
        })
    }
}
$(function () {
    main.init();
})