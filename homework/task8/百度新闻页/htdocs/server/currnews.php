<?php
    header("content-type:application/json;charset=utf-8");
    require_once("connect.php");

    if ($link) {
       $newsid = $_GET["newsid"]; 

       mysqli_query($link,"SET NAMES utf8");
       $sql = "SELECT * FROM `news` WHERE `id` = {$newsid}";

       $result = mysqli_query($link,$sql);

       $senddata = array();

       while($row = mysqli_fetch_assoc($result)){
            array_push($senddata, array(
                            "id"=>htmlspecialchars_decode($row["id"]),
                            "newstype"=>htmlspecialchars_decode($row["newstype"]),
                            "newstitle"=>htmlspecialchars_decode($row["newstitle"]),
                            "newsimg"=>htmlspecialchars_decode($row["newsimg"]),
                            "newsdate"=>htmlspecialchars_decode($row["newsdate"]),
                            "newssrc"=>htmlspecialchars_decode($row["newssrc"]),
                ));
        }
        echo json_encode($senddata);
    }

    mysqli_close($link);



?>