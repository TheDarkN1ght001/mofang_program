var hide = document.getElementById('hide');
var hideT = document.getElementById('hideTow');


document.getElementById('img').onmouseover = function () {
    hide.style.display = 'block';
}
document.getElementById('img').onmouseout = function () {
    hide.style.display = 'none';
}
document.getElementById('imgT').onmouseover = function () {
    hideT.style.display = 'block';
}
document.getElementById('imgT').onmouseout = function () {
    hideT.style.display = 'none';
}

function scroll() {
    return {
        goTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
document.body.onscroll = function () {
    // 判断一下
    if (scroll().goTop >= 150) {
        // 如果正确就进来
        goTop.style.display = 'block';
        // console.log(22);

    } else {
        goTop.style.display = 'none';
    }
}
$(function () {
    var $goTop = $('#top');
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $goTop.stop().fadeIn(300);
        } else {
            $goTop.stop().fadeOut(300);
        }
    });

    $goTop.on('click', function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 300);
    });
});