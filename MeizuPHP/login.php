<?php
  $loginname = $_POST["loginName"];
  $loginPwd = $_POST["loginPwd"];

    //  链接数据库 
    $conn = mysqli_connect("localhost", "root", "123456");
    // 选择数据库
    mysqli_select_db($conn, "meizu");
    // sql语句
    $sql = "SELECT * FROM userinfo where username ='$loginname' AND pwd ='$loginPwd'";

    $result = mysqli_query($conn, $sql);

    $count = mysqli_num_rows($result);

    // 判断
    if ($count == 1) {
        $arr = array("error" => 0, "msg" => "登录成功，点击确认跳转到首页");
        // 设置cookie
        setcookie("islogin", "1", time() + 3 * 1000, "/");
        setcookie("username", $loginname, time() + 3 * 1000, "/");
        setcookie("password", $loginPwd, time() + 3 * 1000, "/");
    } else {
        $arr = array("error" => 1, "msg" => "用户名或密码错误", "count" => $count, "name" => $loginname, "pwd" => $loginPwd);
    }
    echo json_encode($arr);
?>