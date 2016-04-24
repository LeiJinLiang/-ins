/**
 * Created by jinlei on 16/4/12.
 */
var APP_ADDR="https://dir.superchong.com/dir?dev=true";
var _get_host= function (callback) {
    $.ajax({
        url:APP_ADDR,
        async:false,
        success:callback
    })
};
var host=_get_host(function (res) {
    APP_ADDR=res['lost-pet']+'/';
});
var Api = {

    //APP_ADDR                 : "http://192.168.2.111:9014/",

    //APP_ADDR                  :"https://dir.superchong.com/dir?dev=true",
    //详情页面丢失信息
    GET_LOST_INFO	          : "list_lost_pets",
    GET_TAGS                  : "tags?accessToken={0}",
    POST_LOST_INFO            : "add_lost_pet",
    GET_LIST_FOUND            : "list_found_pets",
    GET_DETAIL_BANNER         : "view_lost_pet?accessToken={0}&eventId={1}",
    GET_LOST_COMMET           : "view_lost_pet_comment?accessToken={0}&eventId={1}&page={2}",
    POST_COMMENT_LOST         : "comment_lost_pet",
    GET_POST_INFO             : "view_lost_pet?accessToken={0}&eventId={1}",
    POST_UPDATE_LOST          : "update_lost_pet"
};

var LOCAL_HOST="http://192.168.2.127:8080/json/detail_lost.json";
 //* 在每个API地址前加上APP_ADDR
for (var i in Api) {
    if (i !== "APP_ADDR") {
        Api[i] = APP_ADDR + Api[i];
    }
}
var accessToken="usJXBYvfnSKep87andd7CLwuwJ2HetCMNiKShU36vbo=";
console.log(Api.GET_LOST_INFO);
/**
 * 封装请求方法
 */

var Net = {
    //detail info
    getDetailInfo: function (callback) {
        $.get(LOCAL_HOST,callback);
    },
    //获取寻找主人的宠物 list_found
    getListFound: function (data,callback) {
        $.post(Api.GET_LIST_FOUND,data,callback);
    },
    //获取附近宠物
    getPetlist:function(data,callback) {
        $.post(Api.GET_LOST_INFO,data,callback);
    },
    //获取发布丢失宠物Tags
    getTags: function (callback) {
        $.get(Api.GET_TAGS.format(encodeURIComponent(accessToken)),callback);
    },
    //发布丢失宠物信息
    post_lost: function (data,callback) {
        $.post(Api.POST_LOST_INFO,data,callback);
    },
    //-----------detailPart------------//
    getDetailBanner: function (accessToken,eventId,callback) {
        $.get(Api.GET_DETAIL_BANNER.format(encodeURIComponent(accessToken),eventId),callback);
    },
    //----获取 lost comment-------//
    getLostComment: function (accessToken,eventId,page,callback) {
        $.get(Api.GET_LOST_COMMET.format(encodeURIComponent(accessToken),eventId,page,callback));
    },
   //---评论--
    postCommentLost: function (data,callback) {
        $.post(Api.POST_COMMENT_LOST,data,callback);
    },
   //--获取已发布的丢失宠物信息--
    getPostInfo: function (eventId,callback) {
        $.get(Api.GET_POST_INFO.format(encodeURIComponent(accessToken),eventId),callback);
    },
   //--修改已发布的丢失宠物信息
    postUpdateLost: function (data,callback) {
        $.post(Api.POST_UPDATE_LOST,data,callback);
    }
}
