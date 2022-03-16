'use strict'

$('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: false,//左右の矢印なし
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの非表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});


// section .news

{
	$('.number').on('click', function(event){

    //中身の変更
    //その１ クリックした要素のdata-pairの値を取得
    const pair = $(event.currentTarget).data('pair');

    //その2 その１で取得した値と同じID名の.tabboxから.hideを削除
    //それ以外の.tabboxにはhideを追加

    $('.news-box').addClass('hide');
    $('#' + pair).removeClass('hide');
    
    });

}



// section .make

{
    $('.thumb').on('click', function (event) {
        //data-*属性から値の取得
        const newImg = $(event.currentTarget).data('image');

        //属性の書きか会え
        $('#bigimg').attr('src', newImg);
    });
    
}



//スクロールすると背景色変化
//スクロール発火イベント
window.addEventListener( "scroll" ,function(){

    //スクロールの高さを取得
    let scroll = window.pageYOffset;
    
    if( scroll > 4000 ){ 
      document.body.style.backgroundColor = '#83EBE7';
    }else if( scroll > 3000 ){
      document.body.style.backgroundColor = '#83EBE7';
    }else if( scroll > 2000 ){
      document.body.style.backgroundColor = '#B492F5';
    }else if( scroll > 500 ){
      document.body.style.backgroundColor = '#FCA281';
    }else{
      document.body.style.backgroundColor = '#F7EC93';
    }
    
  });


  // topbutton設定

  window.onscroll = function (evt) {
    //スクロール値の取得
    const position = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(position);

    if (position >= 300) {
        document.getElementById('page-top').classList.add('open');
    } else {
        document.getElementById('page-top').classList.remove('open');
    }
};