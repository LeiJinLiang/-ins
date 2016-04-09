/**
 * Created by jinlei on 16/4/8.
 */
var baseUrl;
baseUrl='https://dev-images.s3.cn-north-1.amazonaws.com.cn/KLpt9jWDpNxPvQd1wl55kusxn1PItDnwWYMaU9g5X0gwzHKgvSctpNv6PpryT3jPzidVaejI91edBhwMH0E4IIZn8q8wSU6Jx4QEg44Gahfvz9w8acUFlg8N1rbyyhQKxTk5WGLuFan7oS2pOAAlZCmzMilEA8unUiwjsH90ZTcNl4WmrrqMyQfAfQrrTKfRuwGrUdm9vRrl85wZNimhUnma0DZUgi8nmTmF10J7k3FKFP2gTgu0sqU6OGY0Rhcr.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20160408T072841Z&X-Amz-SignedHeaders=host&X-Amz-Expires=2999&X-Amz-Credential=AKIAPY5UGCV5QSP37MRQ%2F20160408%2Fcn-north-1%2Fs3%2Faws4_request&X-Amz-Signature=6e1b6fa177c40f9e58ad39813852cccc623458a6de0bee3d8274fb2a9f78fe28';

$(function(){

    var fileUpload=function(base64Img){
        $.ajax({
            url:baseUrl,
            type : 'put',
            contentType:'image/jpeg',
            data :base64Img,
            success: function(res){

            },
            error: function(){
                console.error("upload error");
                alert("图片上传失败！");
            }
        });
    }
    var photo = $('#photo');
    photo.bind('change',function(){
        var falgImg=true;
        if(falgImg){
            console.log('---successful---');
            $('.black').show();
            // 也可以传入图片路径：lrz('../demo.jpg', ...
            lrz(this.files[0], {
                width:300,
                // 压缩开始
                before: function() {
                    console.log('压缩开始');
                },
                // 压缩失败
                fail: function(err) {
                    console.error(err);
                },
                // 压缩结束（不论成功失败）
                always: function() {
                    console.log('压缩结束');
                },
                // 压缩成功
                done: function (results) {
                    // 你需要的数据都在这里，可以以字符串的形式传送base64给服务端转存为图片。
                    console.log(results);
                    fileUpload(results.base64);
                    console.log(results.base64);
                }
            });
        }

    })

})