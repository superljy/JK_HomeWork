$(document).ready(function(){
// 搜索栏
    $(".search-icon").on("click",function(){
        $(".searchBox").show(500);
    });
    $(".close-icon").on("click",function(){
        $(".searchBox").hide(500);
    });
});
// 搜索栏结束