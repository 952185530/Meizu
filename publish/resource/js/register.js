

; (function () {
    // 获取属性
    var $registerName = $("#registerName");
    var $registerPwd = $("#registerPwd");
    var $againPwd = $("#againPwd");
    var $registerBtn = $("#registerBtn");
    // 设置锁
    var $rnLock = false;
    var $rpLock = false;
    var $apLock = false;
    // 当focus的时候清除原状态
    $registerName.focus(function () {
        $registerName.removeClass("is-valid is-invalid");
        $("#nameTips").removeClass("invalid-feedback valid-feedback").html(" ");
        $rnLock = false;
    })
    $registerPwd.focus(function () {
        $registerPwd.removeClass("is-valid is-invalid")
        $("#pwdTips").removeClass("invalid-feedback valid-feedback").html(" ");
        $rpLock = false;
    })
    $againPwd.focus(function () {
        $againPwd.removeClass("is-valid is-invalid")
        $("#againPwdTips").removeClass("invalid-feedback valid-feedback").html(" ");
        $apLock = false;
    })
    $registerName.blur(function () {
        // 定义一个正则，在发送AJAX之前先验证用户输入的信息是否符合要求
        var $nameReg = /^\d{11}$/;
        // 获取输入框内容与正则进行匹配
        var $nameVal = $registerName.val();
        // 如果输入框为空，提示用户
        if (!$nameVal) {
            $registerName.addClass("is-invalid");
            $("#nameTips").html("用户名不能为空!").addClass("invalid-feedback");
            $rnLock = false;
            return;
        }
        // 如果不符合正则，提示用户
        if (!$nameReg.test($nameVal)) {
            $registerName.addClass("is-invalid");
            $("#nameTips").html("用户名不符合规则!").addClass("invalid-feedback");
            $rnLock = false;
            return;
        }
        $.ajax({
            url: "/Meizuphp/checkusername.php",
            data: {
                username: $nameVal,
            },
            dataType: "json",
            // jsonpCallback: "register",
            success: function (data) {
                if (!data.error) {
                    $registerName.addClass("is-valid");
                    $("#nameTips").html(data.msg).addClass("valid-feedback");
                    $rnLock = false;
                } else{
                    $registerName.addClass("is-invalid");
                    $("#nameTips").html(data.msg).addClass("invalid-feedback");
                    $rnLock = true;
                }
            }
        })
        
    })
    $registerPwd.blur(function () {
        // 定义一个正则，在发送AJAX之前先验证用户输入的信息是否符合要求
        var $pwdReg = /^[a-z]{1}[a-z0-9]{7,11}$/;
        // 获取输入框内容与正则进行匹配
        var $pwdVal = $registerPwd.val();
        // 如果输入框为空，提示用户
        if (!$pwdVal) {
            $registerPwd.addClass("is-invalid");
            $("#pwdTips").html("密码不能为空!").addClass("invalid-feedback").removeClass("pwdTips");
            $rpLock = false;
            return;
        }
        // 如果不符合正则，提示用户
        if (!$pwdReg.test($pwdVal)) {
            $registerPwd.addClass("is-invalid");
            $("#pwdTips").html("密码不符合要求!").addClass("invalid-feedback").removeClass("pwdTips");
            $rpLock = false;
            return;
        }
        $registerPwd.addClass("is-valid").removeClass("pwdTips");
        $rpLock = true;
    })
    $againPwd.blur(function () {
        // 获取两个密码框的内容
        var $againPwdVal = $againPwd.val();
        var $pwdVal = $registerPwd.val();
        // 不能为空
        if (!$againPwdVal) {
            $againPwd.addClass("is-invalid");
            $("#againPwdTips").html("不能为空!").addClass("invalid-feedback");
            $apLock = false
            return;
        }
        // 验证内容是否一样
        if ($againPwdVal != $pwdVal) {
            $againPwd.addClass("is-invalid");
            $("#againPwdTips").html("两次密码不统一!").addClass("invalid-feedback");
            $apLock = false
            return;
        }
        $againPwd.addClass("is-valid");
        $apLock = true;
    })
    // 给注册按钮添加事件
    $registerBtn.click(function () {
        if (!($rnLock && $rpLock && $apLock)) {
            return;
        }
        // console.log($rnLock && $rpLock && $apLock);
        $.ajax({
            url: "/Meizuphp/register.php",
            data: {
                username: $registerName.val(),
                pwd: $registerPwd.val()
            },
            dataType: "json",
            // jsonpCallback: "register",
            success: function (data) {
                alert(data.msg + "! 点击确定跳转到登录页面");
                window.location.href = "./login.html";
            }
        })
    })
})()