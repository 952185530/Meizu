<?php
// 接收前端发来的数据
$registerName = $_GET["username"];
$registerPwd = $_GET["pwd"];
// 链接数据库
$conn = mysqli_connect("localhost", "root", "123456");
mysqli_select_db($conn,"meizu");
// 选择具体的数据库
// 定义sql语句
$sql = "INSERT INTO userinfo VALUES('$registerName', '$registerPwd')";
$result = mysqli_query($conn, $sql);
if($row = mysqli_affected_rows($conn)){
    $arr = array("error" => 0 ,"msg" => "注册成功");
} else {
    $arr = array("error" => 1 ,"msg" => $row);
}

echo json_encode($arr);
?>