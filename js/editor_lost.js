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