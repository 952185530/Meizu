(function () {
    // 查找元素
    $loginName = $("#loginName");
    $loginPwd = $("#loginPwd");
    $loginBtn = $("#loginBtn");
    $loginBtn.click(() => {
        if ($loginName.val() && $loginPwd.val()) {
            // console.log($loginName.val(), $loginPwd.val())
            $.ajax({
                type: "POST",
                url: "/Meizuphp/login.php",
                data: {
                    loginName: $loginName.val(),
                    loginPwd: $loginPwd.val()
                },
                dataType: "json",
                success: function (data) {
                    if (data.error) {
                        alert(data.msg);
                    } else {
                        alert(data.msg);
                        window.location.href = "../index.html";
                    }
                }
            })
        }
    })
})()