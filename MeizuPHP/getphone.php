<?php
 // 通知浏览器本次返回内容的类型  让浏览器按照此类型处理

 //  链接数据库 
 $conn = mysqli_connect("localhost", "root", "123456");
 // 选择数据库
 mysqli_select_db($conn, "meizu");
 // sql语句
 $sql = "SELECT * FROM meizu_phone";

 $result = mysqli_query($conn, $sql);
 $arr = array();
 while($row = mysqli_fetch_array($result)) {
     // while循环过程： 1 从$result中抽取一条数据 是一个关联数组   2 交给$row变量存储  3 放入$arr数组中
     array_push($arr, $row);
 }
 // while循环之后  $arr 请理解成[{}, {}, {}, {}, {}] 这样的数组
 $json = array("error" => 0, "msg" => $arr);
 echo json_encode($json);
?>