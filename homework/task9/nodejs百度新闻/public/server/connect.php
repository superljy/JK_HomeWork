<?php
	// 定义每次获取的数据都是json形式
    header("content-type:application/json;charset=utf-8");
    // mysqli_connect()格式 服务器名,用户名,密码,需要连接的数据库名,连接数据库的端口号
    $link = mysqli_connect("localhost","root","root","baidunews",3306);

// 连接文件,后面其他PHP文件需要连接直接调用
?>