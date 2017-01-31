$(document).ready(function(){
// 搜索栏
    $(".search-icon").on("click",function(){
        $(".searchBox").show(500);
    });
    $(".close-icon").on("click",function(){
        $(".searchBox").hide(500);
    });
// 搜索栏结束
//main左侧导航栏
	$(".listOne").hover(function(){
		$(this).next("dd").slideDown();
	},function(){
		$(this).next("dd").slideUp();
	});

	$(".listTwo").hover(function(){
		$(this).next("dd").slideDown();
	},function(){
		$(this).next("dd").slideUp();
	});

	$(".listThree").hover(function(){
		$(this).next("dd").slideDown();
	},function(){
		$(this).next("dd").slideUp();
	});

	$(".listFour").hover(function(){
		$(this).next("dd").slideDown();
	},function(){
		$(this).next("dd").slideUp();
	});
//main左侧导航栏结束
//main右侧栏
	$(".lessonList2").hide();
	$(".previewList li").click(function(){
		$(".previewList li.back").removeClass("back");
		$(this).addClass("back");
	});
	$(".blockIcon").click(function(){
		$(".lessonList").show();
		$(".lessonList2").hide();
	});
	$(".listIcon").click(function(){
		$(".lessonList2").show();
		$(".lessonList").hide();
	});
//main右侧栏结束
});
