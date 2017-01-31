// nav 分类排列
$(document).ready(function(){
    var deviceWidth = $("body").width();
    $("nav li").each(function(index,item){
        //当前遍历对象中找a标签中的html内容,然后用split使用空字符拆分,得到一个数组,再用length判断他的长度
        if ($(this).find("a").html().split("").length>2) {
            $(this).width(deviceWidth/3);
        }else{
            $(this).width(deviceWidth/6);
        }
    });
// nav 分类排列 end
//JS动态新闻
    refreshNews();

    $("nav a").click(function(e){
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    });
    
//JS动态新闻end
});

function refreshNews(type){
    var $lists = $("article ul");
    $lists.empty();
    $.ajax({
        url:"../server/getnews.php",
        type:"get",
        datatype:"json",
        data:{newstype:type},
        success:function(data){

            data.forEach(function(item,index,array){
                var $list = $("<li></li>").addClass("news-list").prependTo($lists);
                var $newsImg = $("<div></div>").addClass("news-img").appendTo($list);
                var $img = $("<img>").attr("src",item.newsimg).appendTo($newsImg);
                var $newsContent = $("<div></div>").addClass("news-content").appendTo($list);
                var $h1 = $("<h1></h1>").html(item.newstitle).appendTo($newsContent);
                var $p = $("<p></p>").appendTo($newsContent);
                var $newsDate = $("<span></span>").addClass("news-date").html(item.newsdate).appendTo($p);
                var $newsSrc = $("<span></span>").addClass("news-src").html(item.newssrc).appendTo($p);
            })

            
            
        }
    });
    
}