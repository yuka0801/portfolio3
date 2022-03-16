'use strict';

$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $('#black').toggleClass('black');
    $('#nav').toggleClass('nav-active');


});

$('.aaa').click(function () {
    $('.openbtn').toggleClass('active');
    $('#black').removeClass('black');
    $('#nav').removeClass('nav-active');
});