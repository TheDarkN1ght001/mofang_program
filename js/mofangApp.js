/*
** Create by JX12138 on 2019/5/9
*/
$(function () {
    $('.container').fullpage({
        /*配置参数*/
        verticalCentered: false,
        navigation: true,
        css:true,
        afterLoad:function (link,index) {
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index-1).addClass('now');
        },
    });
});
