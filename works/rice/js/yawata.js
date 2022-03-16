'use strict';


//spotのスライド
function checkBreakPoint() {

    let w = $(window).width();
    if (w < 750) {
        $('.slider').slick({
            autoplay: true, //自動的に動き出すか。初期値はfalse。
            infinite: true, //スライドをループさせるかどうか。初期値はtrue。
            speed: 500, //スライドのスピード。初期値は300。
            slidesToShow: 1, //スライドを画面に3枚見せる
            slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
            prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
            nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
            centerMode: true, //要素を中央ぞろえにする
            variableWidth: true, //幅の違う画像の高さを揃えて表示
            dots: true, //下部ドットナビゲーションの表示
        });

    } else {
        $('.slide.slick-initialized').slick('unslick');
    }
}

// ウインドウがリサイズする度にチェック
$(window).resize(function () {
    checkBreakPoint();
});

//読み込み直したとき
$(window).on('load', function (){
    checkBreakPoint();
});

// 初回チェック
sliderSetting();

