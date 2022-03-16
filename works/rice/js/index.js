'use strict';


// index用のjs

function checkBreakPoint() {
     let w = $(window).width();
    if (w <= 1024) {
        $('.slider').slick({
            fade: true, //切り替えをフェードで行う。初期値はfalse。
            autoplay: true, //自動的に動き出すか。初期値はfalse。
            autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
            speed: 1000, //スライドの動きのスピード。初期値は300。
            infinite: true, //スライドをループさせるかどうか。初期値はtrue。
            slidesToShow: 1, //スライドを画面に3枚見せる
            slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
            arrows: false, //左右の矢印あり
            dots: false, //下部ドットナビゲーションの表示
            pauseOnFocus: false, //フォーカスで一時停止を無効
            pauseOnHover: false, //マウスホバーで一時停止を無効
            pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
        });

        //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
        $('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
            $('.slider').slick('slickPlay');
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
//sliderSetting();