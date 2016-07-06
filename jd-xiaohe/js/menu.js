/**
 * Created by Administrator on 2015/8/14.
 */
$(document).ready(function(){
  $(".side-menu > .item-li").hover(function(){
    //var eq=$(".side-menu > .item-li").index(this);//获取当前滑动过的是第几个li元素
    var h=$(".side-menu").offset().top;  //菜单栏距离窗口的高度
    var i=$(this).offset().top;  //当前滑过元素距离窗口的高度
//    $(this).addClass("hover-li");
    $(this).children(".s-m").css({"display":"block","top":-(i-h)});

  },function(){
//    $(this).removeClass("hover-li");
    $(this).children(".s-m").css("display","none");
  });
});