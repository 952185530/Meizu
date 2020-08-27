// 前端操作cookie
// 浏览器没有给我们提供操作cookie的api 只能自己封装方法
function getCookie(key) {
    var cookieStr = document.cookie;
    var arr = cookieStr.split("; ");
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        var subArr = arr[i].split("=");
        console.log(subArr);
        if (subArr[0] === key) {
            return subArr[1];
        }
    }
}
var userName = getCookie("username");
var $user = $("#login");
if (userName) {
    $user.html("<span>" + userName + "<span> | <a class='cancel' href='#'>退出账号</a>");
}
function setCookie(key, value) {
    document.cookie = key + "=" + value;
}
function clearCookie() {
    var cookieStr = document.cookie;
    var arr = cookieStr.split("; ");
    var exdate = new Date();
    exdate.setDate(exdate.getDate() - 1)
    for (var i = 0; i < arr.length; i++) {
        var subArr = arr[i].split("=");
        document.cookie = subArr[0] + "=" + escape("");
        // 将上面所设置的时间转格式
        expires = exdate.toGMTString();
        path = "/";
    }
}
$user.on("click", ".cancel", function () {
    location.href = "./html/login.html";
    clearCookie();

})
    