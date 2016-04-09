/**
 * Created by jinlei on 16/4/6.
 */
var mySwiper = new Swiper('.vibanner', {
    autoplay: 3000,//可选选项，自动滑动
    direction : 'horizontal',
    loop:true,
    pagination : '.swiper-pagination',
    paginationClickable :true
})
$("main").on('scroll', function (e) {
    e.preventDefault();
    console.log(1);
});