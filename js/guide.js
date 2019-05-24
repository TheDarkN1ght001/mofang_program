/*
** Create by JX12138 on 2019/5/8
*/
$(function () {
    /*轮播图*/
    var controlLi = $('.guide_control li');
    var liObj = $('.guide_view li');

    var count = 0;
    slider();
    function slider() {
        if (count === liObj.length) {
            count = 0;
        }
        liObj
            .eq(count)
            .stop()
            .animate({opacity: 1})
            .siblings()
            .stop()
            .animate({opacity: 0});
        controlLi.eq(count).addClass('current').siblings().removeClass('current');
        count++;
    }

    var timeId = setInterval(slider, 4000);

    controlLi.each(function (i, item) {
        var index = $(this).attr('data-index', i);
        var $that = $(this);

        $that.on('mouseenter', function () {
            clearInterval(timeId);
            var getIndex = $that.attr('data-index');
            $('.guide_view li')
                .eq(getIndex)
                .stop()
                .animate({opacity: 1})
                .siblings()
                .stop()
                .animate({opacity: 0});
            $('.guide_control li')
                .eq(getIndex)
                .addClass('current')
                .siblings()
                .removeClass('current');
        });

        $that.on('mouseleave', function () {
            timeId = setInterval(slider, 5000);
        })


    });

    /*更多*/
    $('.more').on('click', function () {
        var ulObj = $(this).parent().siblings('ul:last-child');
        var close = ulObj.find('.ul_close');
        var $that = $(this);
        ulObj.css('display', 'block');
        $(this).css('display', 'none');
        close.on('click', function () {
            ulObj.css('display', 'none');
            $that.css('display', 'block');
        });
    });

    /*给所有的cover 添加单价事件*/
});
