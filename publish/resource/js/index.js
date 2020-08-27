// 轮播图
; (function () {
    class $Carousel {
        constructor($dom, $arr) {
            this.$dom = $dom;
            this.$arr = $arr;
        }
        createCarousel = function () {
            // 图片列表
            var $imgLists = "";
            // 小圆点列表
            var $indLists = "";
            $.each(this.$arr, function (index, value) {
                if (index === 0) {
                    $indLists += "<li data-target='#carouselExampleIndicators' data-slide-to='" + index + "'class ='active'></li>";
                    $imgLists += " <div class='carousel-item active'><img src='" + value + "' class='d-block w-100' alt='...'></div>";
                    return;
                }
                $indLists += "<li data-target='#carouselExampleIndicators' data-slide-to='" + index + "'></li>";
                $imgLists += " <div class='carousel-item'><img src='" + value + "' class='d-block w-100' alt='...'></div>";
            })
            var $imgPar = "<div class='carousel-inner'>" + $imgLists + "</div>";
            var $indPar = "<div class='carousel-indicators'>" + $indLists + "</div>";
            this.$dom.append($indPar).append($imgPar);

        }
    }
    var $car = new $Carousel($(".carousel"), ["./resource/images/banner1.jpg", "./resource/images/banner2.jpg", "./resource/images/banner3.jpg", "./resource/images/banner4.jpg", "./resource/images/banner5.jpg", "./resource/images/banner6.jpg", "./resource/images/banner7.jpg"])
    $car.createCarousel();
    $(".carousel").carousel();
})();

(function () {
    // 产品列表
    var $content_container = $("#content_container")
    $.ajax({
        url: "/Meizuphp/getphone.php",
        data: {},
        type: "GET",
        dataType: "json",
        success: function ($data) {
           
            for (var $i = 0; $i < 4; $i++) {
                $.each($data.msg, function ($index, $value) {

                    var $str = `<div class="card" style="width: 18rem;">
                <img src="${$value.phone_img}" class="card-img-top" alt="...">
                <div class="card-body clear_fix">
                  <h5 class="card-title">${$value.phone_title}</h5>
                  <p class="card-text">${$value.phone_desc}</p>
                  <h3>${$value.phone_price}</h3>
                </div>
              </div>`;
                    $content_container.append($str);
                })
            }

        }
    })

    // 鼠标事件
    $content_container.on("mouseover", ".card", function() {
        $(this).addClass("shadow");
    }).on("mouseout",".card", function() {
        $(this).removeClass("shadow");
    })
})()



