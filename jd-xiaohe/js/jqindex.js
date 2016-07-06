/**
 * Created by xiaohe on 2015/8/14.
 */
$(document).ready(function(){
	/*
	**图片焦点轮播***************************
	*/
	var index=0;
	var picWidth1=$(".slider").width();//获取焦点图的宽度
	var picLength1=$(".slider-list li").length;//获取图片的个数
	var picWidth2=$(".slider-2").width();
	var picLength2=$(".slider-list-2 li").length;
	var timer;//定义一个定时器，用于自动切换
	$(".slider-list").css("width",picWidth1*(picLength1));//焦点图容器宽度
	$(".slider-list-2").css("width",picWidth2*(picLength2));
	$("#next").click(function(){
		index += 1;
		if(index == picLength1)
			index = 0;
		Carousel(index);
	});
	$("#prev").click(function(){
		index -= 1;
		if(index == -1)
			index = picLength1-1;
		Carousel(index);
	});
	$(".arrows li").mouseover(function(){
		index = $(this).index();
		// alert(index);
		Carousel(index);
	});
	//图片切换，根据接收的index显示对应内容
	function Carousel(index){
		var newLeft = -index * picWidth1;  
		$(".slider-list").stop(true,false).animate({"left":newLeft},300);
		$(".arrows li").stop(true,false).siblings().removeClass("arrow-on")
		.eq(index).addClass("arrow-on");
	}
	//滑入停止自动切换，滑出开始自动切换
	$(".slider").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			Carousel(index);
			index++;
			if(index == picLength1)
				index = 0;
		},3000);
	}).trigger("mouseleave");	
	//焦点图切换
	$(".arrows-2 li").mouseover(function(){
		index = $(this).index();
		$(this).parents(".slider-2").find(".slider-list-2").css("left",-(index*picWidth2));
		$(this).addClass("arrow-on").siblings().removeClass("arrow-on");
	});	

	/*
	**左侧树形菜单***************************
	*/
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

	/*
	**选项卡切换************************88
	*/
	$(".f-tab li").mouseover(function(event){
		$(this).addClass("on-2").siblings().removeClass("on-2")
		.parents(".f-floor").find(".tab-content .main")
		.eq($(this).index()).css("display","block")
		.siblings().css("display","none");
	})

	/*
	**多图横向切换****************************8
	*/
	var picWidth3=$(".rec-img li").width()+1;
	// alert(picWidth3);
	var picLength3=$(".rec-img li").length;
	$(".rec-img").css("width",picWidth3*picLength3);
	var rIndex = 0;
	var iPic= $(".rec-img").width()/$(".rec-r").width();
	var $newLeft=$(".rec-r").width();
	$(".rec-r .next").click(function(){		
		rIndex -= 1;
		if(rIndex == -iPic)
			rIndex = 0;
		$(".rec-r .rec-img").stop(true,true)
		.animate({"left":rIndex*$newLeft},300);
	});
	$(".rec-r .prev").click(function(){
		rIndex +=1;
		if(rIndex == iPic)
			rIndex = 0;
		$(".rec-r .rec-img").stop(true,true)
		.animate({"left":-rIndex*$newLeft},300);
	});


	/*
	**banner-r
	*/
	$(".item-box").hover(function(){
		$(this).addClass("box-on").children(".s-item-box").css("display","block");
	},function(){
		$(this).removeClass("box-on").children(".s-item-box").css("display","none");
	});
	/*
	*返回顶部************************************888
	*/
	$(window).scroll(function(){
		if($(window).scrollTop()>=$(window).innerHeight()/2){
			$("#to-top").fadeIn(400);
		}else{
			$("#to-top").fadeOut(200);
		}
	});
	$("#to-top").click(function(){
		$("body,html").animate({scrollTop:"0px"},400);
	});
});