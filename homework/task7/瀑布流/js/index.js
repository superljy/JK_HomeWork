$(document).ready(function() {
    $(window).on("load", function() {
    	imgLocation();
    	//当判断允许滚动加载图片的时候,需要加载事件
    	//json字符串
    	var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]};
    	//监听鼠标滚动事件
    	window.onscroll = function(){
    	//开始判断是否加载
    		if (scrollSide()) {
    		//遍历dataImg,index位置索引,value元素对象
    			$.each(dataImg.data,function(index,value){
    		//开始追加加载的元素,按照原有的html样式,在div标签里添加class为box的类,然后在box下添加content,再添加img图片
    			var box = $("<div>").addClass("box").appendTo($(".wrapper"));
    			var content = $("<div>").addClass("content").appendTo(box);
    			$("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
    			});
    		imgLocation();
    		};
    	};
    });
});

//鼠标滚动到即将底部需要加载新图片用判断函数
function scrollSide(){
	//生成box对象
	var box = $(".box");
	//获取最下面边缘图片的整体高度(从页面顶部到该图片的整个高度)
	//这个判断加载的位置自己定位,大于这个高度就加载,小于就不加载
	var lastBoxHeight = box.last().get(0).offsetTop;
	console.log(lastBoxHeight);
	//获取当前容器的高度
	var documentHeight = $(document).height();
	// console.log(documentHeight);
	//获取鼠标滚动的高度
	var scrollHeight = $(window).scrollTop();
	// console.log(scrollHeight);
	// console.log(documentHeight+scrollHeight);
	//return一个判断 文档高度+鼠标滚动高度是否>允许加载边缘设定的高度 返回相应的true或false
	return (lastBoxHeight<documentHeight+scrollHeight)?true:false;
}

//图片位置的函数
function imgLocation() {
    //获取box对象(获取box后才能获取到box的宽度)
    var box = $(".box");
    //获取第一个box的宽度(因为每个box的宽度一样,所以任意获取一个都一样)
    var boxWidth = box.eq(0).width();
    //获取每行放置box的个数
    //一行的宽度除以单个box的宽度从而获得个数,Math.floor将浮点数转化为整数
    var num = Math.floor($(window).width() / boxWidth);
    //创建数组 用来存储所有box的高度
    //获取box高度的原因是用于获取一行中高度最小的box
    var boxArr = [];
    //遍历一次box,存入index和value参数,index用以存储元素位置,value用以获得当前的元素是哪个元素
    box.each(function(index,value){
        //获取box的高度
        var boxHeight = box.eq(index).height();
        //加入判断,如果box元素的位置序号比每行个数要小,则继续获取高度,如果序号达到每行个数,则跳转出去else后的函数
        if (index < num) {
            boxArr[index] = boxHeight;//数组要带索引,boxArr[index]<--
        } else {
        //获取最小高度
        	var minBoxHeight = Math.min.apply(null,boxArr);
        //获取最小高度的图片所在的位置
        	var minBoxIndex = $.inArray(minBoxHeight,boxArr);
        //通过设置box的对象来设置图片摆放的位置,box的对象即value
        //操作css样式
        	$(value).css({
        //设置value对象绝对定位
        		"position":"absolute",
        //top的位置是最小高度的图片的下方
        		"top":minBoxHeight,
        //left的位置是最小高度图片位置的左方的定位
        		"left":box.eq(minBoxIndex).position().left
        	});
        //填充了一张图片后,上一排最小高度的图片的高度就需要加上填充上的图片的高度,也就是两张图片的高度,然后重新存储到boxArr数组里面,用作后续的判断
        	boxArr[minBoxIndex] += box.eq(index).height();
        };
    });
}
