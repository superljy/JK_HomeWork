<?php
    header("content-type:application/json;charset=utf-8");
    require_once("connect.php");

    if ($link) {
        // 修改新闻
        $newstitle = addslashes(htmlspecialchars($_POST["newstitle"]));
        $newstype = addslashes(htmlspecialchars($_POST["newstype"]));
        $newsimg = addslashes(htmlspecialchars($_POST["newsimg"]));
        $newsdate = addslashes(htmlspecialchars($_POST["newsdate"]));
        $newssrc = addslashes(htmlspecialchars($_POST["newssrc"]));
        $newsid = addslashes(htmlspecialchars($_POST["id"]));

        $sql = "UPDATE `news` SET 
            `newstitle`='{$newstitle}',
            `newstype`='{$newstype}',
            `newsimg`='{$newsimg}',
            `newsdate`='{$newsdate}',
            `newssrc`='{$newssrc}'  
            WHERE `id` = {$newsid}";

        mysqli_query($link,"SET NAMES utf8");
        $result = mysqli_query($link,$sql);

        echo json_encode(array("success"=>$sql));
    }

    mysqli_close($link);

?>