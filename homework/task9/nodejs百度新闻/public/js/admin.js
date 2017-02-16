//打开后台页面的时候发送请求,实现刷新新闻列表
$(document).ready(function() {

    var $newsTable = $("#newsTable tbody");

    refreshNews();

    //添加新闻
    $("#btnsubmit").click(function(e) {
        // 禁止按钮默认提交得功能
        e.preventDefault();
        // 添加输入判断
        if ($("#newstitle").val() === "" || $("#newsimg").val() === "" || $("#newsdate").val() === "" || $("#newssrc").val() === "") {
            if ($("#newstitle").val() === "") {
                $("#newstitle").parent().addClass("has-error"); //has-error是bootstrap的一种错误提示类
            } else {
                $("#newstitle").parent().removeClass("has-error");
            }
            if ($("#newsimg").val() === "") {
                $("#newsimg").parent().addClass("has-error"); //has-error是bootstrap的一种错误提示类
            } else {
                $("#newsimg").parent().removeClass("has-error");
            }
            if ($("#newsdate").val() === "") {
                $("#newsdate").parent().addClass("has-error"); //has-error是bootstrap的一种错误提示类
            } else {
                $("#newsdate").parent().removeClass("has-error");
            }
            if ($("#newssrc").val() === "") {
                $("#newssrc").parent().addClass("has-error"); //has-error是bootstrap的一种错误提示类
            } else {
                $("#newssrc").parent().removeClass("has-error");
            }
        } else {
            // 提交添加新闻
            var jsonNews = {
                newstitle: $("#newstitle").val(),
                newstype: $("#newstype").val(),
                newsimg: $("#newsimg").val(),
                newsdate: $("#newsdate").val(),
                newssrc: $("#newssrc").val(),
            }
            $.ajax({
                url: "/admin/insert",
                type: "post",
                data: jsonNews,
                datatype: "json",
                success: function(data) {
                    $("#newstitle").val("");
                    $("#newstype").val("");
                    $("#newsimg").val("");
                    $("#newsdate").val("");
                    $("#newssrc").val("");
                    refreshNews();
                }
            });
        }
    });


    // 模态框动态生成,不能直接绑定事件
    // 删除新闻
    var deleteId = null;
    $newsTable.on("click", ".btn-danger", function(e) {
        $("#deleteModal").modal("show");
        deleteId = $(this).parent().prevAll().eq(5).html();
    });
    $("#deleteModal #confirmDelete").click(function(e) {
        console.log(deleteId);
        if (deleteId) {
            $.ajax({
                url: "/admin/delete",
                type: "post",
                data: { newsid: deleteId },
                datatype: "json",
                success: function(data) {
                    console.log("删除成功");
                    $("#deleteModal").modal("hide");
                    refreshNews();
                }
            });
        }
    });

    // 新闻列表
    var updateId = null;
    $newsTable.on("click", ".btn-primary", function(e) {
        $("#updateModal").modal("show");
        updateId = $(this).parent().prevAll().eq(5).html();

        $.ajax({
            url: "/admin/currnews",
            type: "get",
            data: { newsid: updateId },
            datatype: "json",
            success: function(data) {
                console.log(data);
                $("#unewstitle").val(htmlspecialchars_decode(data[0].newstitle));
                $("#unewstype").val(htmlspecialchars_decode(data[0].newstype));
                $("#unewsimg").val(htmlspecialchars_decode(data[0].newsimg));
                $("#unewssrc").val(htmlspecialchars_decode(data[0].newssrc));
                // 获取到时间后用空格分开,取左半边的年月日部分
                var uDate = moment(data[0].newsdate).format("YYYY-MM-DD HH:mm:ss");
                $("#unewsdate").val(uDate);

            }
        });
    });

    //修改新闻
    $("#updateModal #confirmUpdate").click(function(e) {
        $.ajax({
            url: "/admin/update",
            type: "post",
            datatype: "json",
            data: {
                newstitle: $("#unewstitle").val(),
                newstype: $("#unewstype").val(),
                newsimg: $("#unewsimg").val(),
                newssrc: $("#unewssrc").val(),
                newsdate: $("#unewsdate").val(),
                id: updateId
            },
            success: function(data) {
                $("#updateModal").modal("hide");
                refreshNews();
            }
        });
    });




    function refreshNews() {
        // 第一步,清空所有新闻
        $newsTable.empty();
        $.ajax({
            type: "get",
            url: "/admin/getnews",
            datatype: "json",
            success: function(data) {
                console.log(data);
                //forEach原生的指令,遍历data,向td中插入内容(使用工厂函数)
                data.forEach(function(item, index, array) {
                    var $tdid = $("<td>").html(item.id);
                    var $tdtype = $("<td>").html(item.newstype);
                    var $tdtitle = $("<td>").html(item.newstitle);
                    var $tdimg = $("<td>").html(item.newsimg);
                    var $tdsrc = $("<td>").html(item.newssrc);
                    var $tddate = $("<td>").html(moment(item.newsdate).format("YYYY-MM-DD HH:mm:ss"));
                    var $tdctrl = $("<td>");
                    var $btnupdate = $("<button>").addClass("btn btn-primary btn-xs").html("编辑");
                    var $btndelete = $("<button>").addClass("btn btn-danger btn-xs").html("删除");
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $("<tr>");
                    $tRow.append($tdid, $tdtitle, $tdtype, $tdimg, $tddate, $tdsrc, $tdctrl)
                    $newsTable.append($tRow);
                });
            }
        });
    }
});


// 反转义函数
// function htmlspecialchars_decode(str) { 
//     str = str.replace(/&/g, '&');
//     str = str.replace(/</g, '<');
//     str = str.replace(/>/g, '>');
//     str = str.replace(/"/g, "''");
//     str = str.replace(/'/g, "'");
//     return str; 
// }
 function htmlspecialchars_decode(str){           
    str = str.replace(/&amp;/g, '&'); 
    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&gt;/g, '>');
    str = str.replace(/&quot;/g, "''");  
    str = str.replace(/&#039;/g, "'");  
    return str;  
}