/**
 * Created by jinlei on 16/4/12.
 */
var EventUtil={
    addHandler:function(element,type,handler){ //添加事件
        if(element.addEventListener){
            element.addEventListener(type,handler,false);  //使用DOM2级方法添加事件
        }else if(element.attachEvent){                    //使用IE方法添加事件
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+type]=handler;          //使用DOM0级方法添加事件
        }
    },
    removeHandler:function(element,type,handler){  //取消事件
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type]=null;
        }
    },
    getEvent:function(event){  //使用这个方法跨浏览器取得event对象
        return event?event:window.event;
    },

    getTarget:function(event){  //返回事件的实际目标
        return event.target||event.srcElement;
    },

    preventDefault:function(event){   //阻止事件的默认行为
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },

    stopPropagation:function(event){  //立即停止事件在DOM中的传播
        //避免触发注册在document.body上面的事件处理程序
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    },

    getRelatedTarget:function(event){  //获取mouseover和mouseout相关元素
        if(event.relatedTarget){
            return event.relatedTarget;
        }else if(event.toElement){      //兼容IE8-
            return event.toElement;
        }else if(event.formElement){
            return event.formElement;
        }else{
            return null;
        }
    },

    getButton:function(event){    //获取mousedown或mouseup按下或释放的按钮是鼠标中的哪一个
        if(document.implementation.hasFeature("MouseEvents","2.0")){
            return event.button;
        }else{
            switch(event.button){   //将IE模型下的button属性映射为DOM模型下的button属性
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;  //按下的是鼠标主按钮（一般是左键）
                case 2:
                case 6:
                    return 2;  //按下的是中间的鼠标按钮
                case 4:
                    return 1;  //鼠标次按钮（一般是右键）
            }
        }
    },

    getWheelDelta:function(event){ //获取表示鼠标滚轮滚动方向的数值
        if(event.wheelDelta){
            return event.wheelDelta;
        }else{
            return -event.detail*40;
        }
    },

    getCharCode:function(event){   //以跨浏览器取得相同的字符编码，需在keypress事件中使用
        if(typeof event.charCode=="number"){
            return event.charCode;
        }else{
            return event.keyCode;
        }
    }

};
/**
 * 文本框根据输入内容自适应高度
 * @param                {HTMLElement}        输入框元素
 * @param                {Number}                设置光标与输入框保持的距离(默认0)
 * @param                {Number}                设置最大高度(可选)
 */
var autoTextarea = function (elem, extra, maxHeight) {
    extra = extra || 0;
    var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
        isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
        addEvent = function (type, callback) {
            elem.addEventListener ?
                elem.addEventListener(type, callback, false) :
                elem.attachEvent('on' + type, callback);
        },
        getStyle = elem.currentStyle ? function (name) {
            var val = elem.currentStyle[name];

            if (name === 'height' && val.search(/px/i) !== 1) {
                var rect = elem.getBoundingClientRect();
                return rect.bottom - rect.top -
                    parseFloat(getStyle('paddingTop')) -
                    parseFloat(getStyle('paddingBottom')) + 'px';
            };

            return val;
        } : function (name) {
            return getComputedStyle(elem, null)[name];
        },
        minHeight = parseFloat(getStyle('height'));


    elem.style.resize = 'none';

    var change = function () {
        var scrollTop, height,
            padding = 0,
            style = elem.style;

        if (elem._length === elem.value.length) return;
        elem._length = elem.value.length;

        if (!isFirefox && !isOpera) {
            padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
        };
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        elem.style.height = minHeight + 'px';
        if (elem.scrollHeight > minHeight) {
            if (maxHeight && elem.scrollHeight > maxHeight) {
                height = maxHeight - padding;
                style.overflowY = 'auto';
            } else {
                height = elem.scrollHeight - padding;
                style.overflowY = 'hidden';
            };
            style.height = height + extra + 'px';
            scrollTop += parseInt(style.height) - elem.currHeight;
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            elem.currHeight = parseInt(style.height);
        };
    };

    addEvent('propertychange', change);
    addEvent('input', change);
    addEvent('focus', change);
    change();
};

/**
 * @returns 返回Unix时间戳。
 */
function strToJson(str){
    var json = eval('(' + str + ')');
    return json;
}
function getTimestamp() {
    var timestamp = new Date().getTime();
    Net.getServerTime(function(data){
        if (data) {
            timestamp = data.serverTime;
        }
    });

    return timestamp;
}

/**
 *解决跨越ajax请求不带cookie
 */
$.ajaxSetup({
    xhrFields: {
        withCredentials: true
    }
});

/**
 * 格式化输入字符串
 * 用法: "hello{0}".format('world')；返回'hello world'
 * **/
String.prototype.format= function(){
    var args = arguments;
    return this.replace(/\{(\d+)\}/g,function(s,i){
        return args[i];
    });
};

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
/**
 * 解析URL参数。
 *
 * @param url
 * @returns 解析后的键值对。
 */
function parseUrlParam(url) {
    if (typeof url == 'undefined' ||
        typeof url == undefined) {
        return {};
    }

    var index = -1
    if ((index = url.indexOf('#')) < 0) {
        index = url.indexOf('?');
    }

    if (index < 0) {
        console.log('[debug]url<'+url+'>无效或者当中不包含参数。');
        return {};
    }

    var params = {};
    var entries = url.substring(index+1).split('&');
    console.log('[debug]url参数：' + entries);

    $.each(entries, function(index, item) {
        if (item.indexOf('=') >= 0) {
            var keyValue=item.split('=')
            params[keyValue[0]] = keyValue[1];
        }
    });

    return params;
}

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
/**
 *解决跨越ajax请求不带cookie
 */
$.ajaxSetup({
    xhrFields: {
        withCredentials: false
    },
    crossDomain: true,
    contentType:'application/json'
});
