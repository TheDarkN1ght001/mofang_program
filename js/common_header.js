$(function () {
    var $liObjs = $('.logo .logo_left .nav_list');
    $liObjs.mouseenter(function () {
        $(this).children('.subnav').css('display', 'block');
    });

    $liObjs.mouseleave(function () {
        $(this).children('.subnav').css('display','none');
    });
});
