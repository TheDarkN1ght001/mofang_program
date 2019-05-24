/*
** Create by JX12138 on 2019/5/9
*/
$(function () {
    // 滑动
    $('.div_click').click(function () {
        var thisId = $(this).attr('id');
        if ($(this).hasClass('current')){
            $(this).removeClass('current');
            $('#'+thisId+'-content').slideUp(500);
        } else {
            $(this).addClass('current');
            $('#'+thisId+'-content').slideDown(500);
        }
    });

    // tab切换
    $('.change_tab a').click(function () {
        if ($(this).hasClass('current')) {
            return true;
        } else {
            $(this).addClass('current').siblings().removeClass('current');
            if ($('.change_tab a').index(this) === 1) {
                $('.guide_post').hide();
                $('.guide_feed').show();
            } else {
                $('.guide_post').show();
                $('.guide_feed').hide();
            }
        }
    });
});
