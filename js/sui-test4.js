/**
 * Created by Administrator on 2017/6/8.
 */

$("#clear").click(function () {
    var x;
    var r=confirm("确定清空缓存？");
    if (r==true){
        console.log("确定");
    }
    else{
        console.log("取消");
    }
});
