// 右侧产品栏
var baidu = {
	init: function(){
		this.baidusetting();
	},
	baidusetting:function(){
		$("#navMore,#moreProduct").mouseover(function(){
			$("#moreProduct").show();
		}).mouseout(function(){
			$("#moreProduct").hide();
		})
	}
}

$(function(){
	baidu.init();
})
// 右侧产品栏完


$(document).ready(function(){
	// 换肤
	$(".skinin").on("click",function(){
		$(".skin-border").toggle("normal","linear");
	});

	// localStorage
	// var a = localStorage.getItem("a");
	// if (a==null&&a==undefined) {
	// 	$(".change-skin").attr("href","css/baidu.css");
	// }else{
	// 	$(".change-skin").attr("href",a);
	// }


	$(".skin-body ul li a").on("click",function(){
		var img = __uri('img/8271.jpg');
		console.log(img);
		$(".wrapper").css("background","url('img') no-repeat center");
		// var storage = window.localStorage;
		// storage.a = "css/baidu1.css";
		// $(".change-skin").attr("href",storage.a);
	});
	$(".noSkin").on("click",function(){
		$(".wrapper").css("background","#fff");
		// var storage = window.localStorage;
		// storage.a = "css/baidu.css";
		// $(".change-skin").attr("href",storage.a);
	});
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


