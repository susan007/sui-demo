/**
 * Created by Administrator on 2017/6/9.
 */


var t = n = i = 0, count;
$(function () {
    count = $(".scroll_pic a").length;//求出图片数量
    $(".scroll_pic a:not(:first)").hide();//隐藏第一张以外的所有图片
    $("#scroll_button li").click(function () {
        i = n = $(this).index();//index() 方法返回指定元素相对于其他指定元素的 index 位置。
        $(".scroll_pic a").eq(i).show().siblings().hide();//siblings()选择除自身以外的所有同胞元素
        $(this).addClass("scroll_in").siblings().removeClass("scroll_in");
        //鼠标经过图片区域停止setInterval()调用函数，移开恢复
    });
    t = setInterval("picShowAuto()", 3500);//setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭
    $(".scroll").hover(function () {
        clearInterval(t)
    }, function () {
        t = setInterval("picShowAuto()", 3500);
    });
});

function picShowAuto() {
    n = n >= (count - 1) ? 0 : ++n;
    $("#scroll_button li").eq(n).trigger("click");//trigger() 方法触发被选元素的指定事件类型
}

