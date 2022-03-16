'use strict';

// const targetElement = document.querySelectorAll(".animationTarget");

// for (let i = 0; i < targetElement.length; i++) {
//     const getElementDistance = targetElement[i].getBoundingClientRect().top
// }

$(window).scroll(function () {
    let scrollTop = $(window).scrollTop(); // スクロール上部の位置
    let areaTop = $(".fav").offset().top; // 対象エリアの上部の位置
    let areaBottom = areaTop + $(".fav").innerHeight(); // 対象エリアの下部の位置

    if (scrollTop > areaTop && scrollTop < areaBottom) {
        $(".fav-img").addClass("fav-in"); // スクロールが対象エリアに入った場合
    } else {
        $(".fav-img").removeClass("fav-in"); // スクロールが対象エリアから出ている場合
    }
});



