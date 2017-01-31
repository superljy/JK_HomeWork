// 右侧产品栏
// 单例模式
// 使用了单例模式,目的是为了减少全局变量的生成,节约资源
var baidu = {
	init: function(){
		this.baidusetting();
	},
	baidusetting:function(){
		$("#navMore,#moreProduct").mouseover(function(){
			$("#moreProduct").show();
		}).mouseout(function(){
			$("#moreProduct").hide();
		});
	}
}

$(function(){
	baidu.init();
});
// 右侧产品栏完
// 换肤
// 单例模式
var skin = {
	init:function(){
		this.skinin = $(".skinin");
		this.skinList = $(".skin-body ul li a");
		this.noSkin = $(".noSkin");
		this.changeSkin();
	},
	changeSkin:function(){
		this.skinin.on("click",function(){
			$(".skin-border").toggle("normal","linear");
		});
		this.skinList.on("click",function(){
			$(".wrapper").css("background","url(./img/8271.jpg) no-repeat center");
		});
		this.noSkin.on("click",function(){
			$(".wrapper").css("background","#fff");
		});
	}
}
$(function(){
	skin.init();
});
// 换肤完
$(document).ready(function(){
	// // 换肤
	// $(".skinin").on("click",function(){
	// 	$(".skin-border").toggle("normal","linear");
	// });
	// $(".skin-body ul li a").on("click",function(){
	// 	$(".wrapper").css("background","url(./img/8271.jpg) no-repeat center");
	// });
	// $(".noSkin").on("click",function(){
	// 	$(".wrapper").css("background","#fff");
	// });
	// 换肤完
	//tab标签切换
	$(".tabContent").load("./pages/tab1.html #tab1");
	$(".mainUl li").each(function(index){
		$(this).on("click",function(){
			$(".mainUl li.tabIn").removeClass("tabIn");
			$(this).addClass("tabIn");
			if (index == 0) {
				$(".tabContent").load("./pages/tab1.html #tab1");
			}else if (index == 1) {
				$(".tabContent").load("./pages/tab2.html #tab2");
			}else if (index == 2) {
				$(".tabContent").load("./pages/tab3.html #tab3");
			}else if (index == 3) {
				$(".tabContent").load("./pages/tab4.html #tab4");
			}else if (index == 4) {
				$(".tabContent").load("./pages/tab5.html #tab5");
			}
		});
	});
	// 标签切换完
});


