<?php
    // 定义每次获取的数据都是json形式
    header("content-type:application/json;charset=utf-8");
    // mysqli_connect()格式 服务器名,用户名,密码,需要连接的数据库名,连接数据库的端口号
    require_once("connect.php");

    if ($link) {
        // 连接成功时执行成功的过程
        if (@$_GET["newstype"]) {
            $newstype=$_GET["newstype"];
            $sql = "SELECT * FROM `news` WHERE `newstype`='{$newstype}'";
            
            mysqli_query($link,"SET NAMES utf8");
            $result = mysqli_query($link,$sql);

            $senddata =array();

            while($row = mysqli_fetch_assoc($result)){
                array_push($senddata, array(
                                "id"=>$row["id"],
                                "newstype"=>$row["newstype"],
                                "newstitle"=>$row["newstitle"],
                                "newsimg"=>$row["newsimg"],
                                "newsdate"=>$row["newsdate"],
                                "newssrc"=>$row["newssrc"],
                    ));
            }
            echo json_encode($senddata);
        }else{
            $sql = "SELECT * FROM news";
            mysqli_query($link,"SET NAMES utf8");
            $result = mysqli_query($link,$sql);
            $senddata =array();
            while($row = mysqli_fetch_assoc($result)){
                array_push($senddata, array(
                                "id"=>$row["id"],
                                "newstype"=>$row["newstype"],
                                "newstitle"=>$row["newstitle"],
                                "newsimg"=>$row["newsimg"],
                                "newsdate"=>$row["newsdate"],
                                "newssrc"=>$row["newssrc"],
                    ));
            }
            echo json_encode($senddata);
        }
    }else{
        echo json_encode(array("success"=>"none"));
    }

    mysqli_close($link);
    // $arr = array(
    //     'newstype' => '精选', 
    //     'newsimg' => './img/news2.jpg',
    //     'newsdate' => '2016-12-12',
    //     'newssrc' => '新闻',
    //     'newstitle' => '机器人上刀山下火海', 
    //     );
    // echo json_encode($arr);
?>