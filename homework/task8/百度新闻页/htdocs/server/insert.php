<?php

	header("content-type:application/json;charset=utf-8");
	// 调用connect.php连接文件
	require_once("connect.php");

	// 判断link是否连通
	if ($link) {
		// 连通后插入新闻
		$newstitle = addslashes(htmlspecialchars($_POST["newstitle"]));
		$newstype = addslashes(htmlspecialchars($_POST["newstype"]));
		$newsimg = addslashes(htmlspecialchars($_POST["newsimg"]));
		$newsdate = addslashes(htmlspecialchars($_POST["newsdate"]));
		$newssrc = addslashes(htmlspecialchars($_POST["newssrc"]));
		// 对应写入数据
		$sql = "INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newsdate`,`newssrc`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newsdate}','{$newssrc}')";
		// 设定字符为utf8 防止乱码
		mysqli_query($link,"SET NAMES utf8");
        $result = mysqli_query($link,$sql);

        echo json_encode(array("success"=>"ok"));
	}
?>