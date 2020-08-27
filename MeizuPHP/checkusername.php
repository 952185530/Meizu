<?php
    // 接收前端提交的数据
    $username = $_GET["username"];

    // 连接数据库
   $conn = mysqli_connect("localhost", "root", "123456");

    // 选择数据库
    mysqli_select_db($conn,"meizu");

    // 定义查询语句
    $sql = "SELECT * FROM userinfo WHERE username='$username'";

    // 执行
    $result = mysqli_query($conn,$sql);

    // 获取查询到的数据的数量
    $count = mysqli_num_rows($result);
    
    // 判定$count
    if ($count) {
        $arr = array("error" => 1, "msg" => "用户名已被占用");
    } else {
        $arr = array("error" => 0, "msg" => "用户名可以使用");
    }
    

    echo  json_encode($arr);
?>