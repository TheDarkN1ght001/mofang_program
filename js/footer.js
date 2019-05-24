/*
** Create by JX12138 on 2019/5/9
*/
$(function () {
    var $goTop = $('#go-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $goTop.stop().fadeIn(300);
        }else {
            $goTop.stop().fadeOut(300);
        }
    });

    $goTop.on('click', function () {
       $('html, body').stop().animate({scrollTop: 0}, 300);
    });
});
