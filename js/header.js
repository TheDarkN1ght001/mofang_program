/*
** Create by JX12138 on 2019/5/9
*/
// 导航栏开始
$(function () {
    $(".hander ul li:eq(0)").mouseenter(function () {
        $(this).css({
            "backgroundColor": "white",
            "border": "1px solid #c0c0c0",
            "borderBottom": "1px solid white"
        })
        $(this).children().css("color", "#0e65af")
    })
    $(".hander ul li:eq(0)").mouseleave(function () {
        $(this).css({
            "backgroundColor": " #28898d",
            "borderLeft": "1px solid #3a9d9a",
            "borderRight": "1px solid #49a6a5",
            "borderTop": "1px solid #3a9d9a",
            "borderBottom": "1px solid #3a9d9a"
        })
        $(this).children().css("color", "white")
    })


    $(".hander ul li:eq(1)").mouseenter(function () {
        $(".destination").show();
        $(".destination").css("backgroundColor", "white");
        $(this).css({
            "backgroundColor": "white",
            "border": "1px solid #c0c0c0",
            "borderBottom": "1px solid white"
        })
        $(this).children().css({ "color": "#0e65af" })
        $(this).find(".SJ").css("borderColor", " white white #0e6596 white")
    })
    $(".hander ul li:eq(1)").mouseleave(function () {
        $(this).css({
            "backgroundColor": "#3a9d9a",
            "borderColor": "#3a9d9a"
        })
        $(this).children().css({ "color": "#c4f7ff" })
        $(this).find(".SJ").css("borderColor", "#c4f7ff #3a9d9a #3a9d9a  #3a9d9a")
        $(".destination").hide()

    })

    $(".hander ul li:eq(2)").mouseenter(function () {
        $(".activity").show();
        $(".activity").css("backgroundColor", "white");
        $(this).css({
            "backgroundColor": "white",
            "border": "1px solid #c0c0c0",
            "borderBottom": "1px solid white"
        })
        $(this).children().css({ "color": "#0e65af" })
        $(this).find(".SJ").css("borderColor", " white white #0e6596 white")
    })
    $(".hander ul li:eq(2)").mouseleave(function () {
        $(this).css({
            "backgroundColor": "#3a9d9a",
            "borderColor": "#3a9d9a"
        })
        $(this).children().css({ "color": "#c4f7ff" })
        $(this).find(".SJ").css("borderColor", "#c4f7ff #3a9d9a #3a9d9a  #3a9d9a")
        $(".activity").hide()
    })

    $(".hander ul li:eq(3)").mouseenter(function () {
        $(".community").show();
        $(".community").css("backgroundColor", "white");
        $(this).css({
            "backgroundColor": "white",
            "border": "1px solid #c0c0c0",
            "borderBottom": "1px solid white"
        })
        $(this).children().css({ "color": "#0e65af" })
        $(this).find(".SJ").css("borderColor", " white white #0e6596 white")
    })
    $(".hander ul li:eq(3)").mouseleave(function () {
        $(this).css({
            "backgroundColor": "#3a9d9a",
            "borderColor": "#3a9d9a"
        })
        $(this).children().css({ "color": "#c4f7ff" })
        $(this).find(".SJ").css("borderColor", "#c4f7ff #3a9d9a #3a9d9a  #3a9d9a")
        $(".community").hide()
    })

    $(".hander ul li:eq(4)").mouseenter(function () {
        $(".serve").show();
        $(".serve").css("backgroundColor", "white");
        $(this).css({
            "backgroundColor": "white",
            "border": "1px solid #c0c0c0",
            "borderBottom": "1px solid white"
        })
        $(this).children().css({ "color": "#0e65af" })
        $(this).find(".SJ").css("borderColor", " white white #0e6596 white")
    })
    $(".hander ul li:eq(4)").mouseleave(function () {
        $(this).css({
            "backgroundColor": "#3a9d9a",
            "borderColor": "#3a9d9a"
        })
        $(this).children().css({ "color": "#c4f7ff" })
        $(this).find(".SJ").css("borderColor", "#c4f7ff #3a9d9a #3a9d9a  #3a9d9a")
        $(".serve").hide()
    })
    // 导航栏结束
});