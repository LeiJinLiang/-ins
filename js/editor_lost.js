/**
 * Created by jinlei on 16/4/5.
 */
$('.pet_detail').find('li').on('click', function () {
   $(this).find('.chose').removeClass('hidden');
   $(this).find('.name').addClass('hidden');
});
$('.pet_detail').find('.chose').on('change', function () {
    $(this).addClass('hidden');
    $(this).siblings('.name').removeClass('hidden');
});
$('.pet_detail').find('.chose').on('blur', function () {
    $(this).addClass('hidden');
    $(this).siblings('.name').removeClass('hidden');
});
$(".textarea").focus(function(){
    setTimeout(function(){
        $(window).scrollTop(700);
    },100);
});