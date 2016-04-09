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

//
//$.ajax({
//    url:'https://dev-images.s3.cn-north-1.amazonaws.com.cn/NloryXcnfPYESiHiYTqP5oLuMg4cDBIa7Fik554NTVshZdwnG6plAgRPQOyltzU4Wd4JPswUEsWDjZbinhORzTreXT9tdfw3M5Tdm4iJdWdyCa6Ckor9zUhVIiIsd7TBpKfiyxnOpWNKWYx8Kec2JfUGKv5Fulmf0FGtFSszVg8o4lcYzNXaGM9uOUEpOrnKY6umBkdeFGdVyaPBESHUxoYpg9hONL1gOFHRhFHYwzpS2e8KDUcZtDwotiBnToM4.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20160408T033925Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=AKIAPY5UGCV5QSP37MRQ%2F20160408%2Fcn-north-1%2Fs3%2Faws4_request&X-Amz-Signature=2b07286433a4900db51b4826b2eb203740f414dc0539c9aff9da1f95edaeacf9',
//    type:'put',
//    success: function () {
//
//    },
//    error: function () {
//
//    }
//
//})