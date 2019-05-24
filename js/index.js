
$(function () {
    // 导航栏开始
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
        $(this).find(".SJ").css({ "borderColor": " white white #0e6596 white", "top": "17px" })
    })
    $(".hander ul li:eq(1)").mouseleave(function () {
        $(this).css({
            "backgroundColor": "#3a9d9a",
            "borderColor": "#3a9d9a"
        })
        $(this).children().css({ "color": "#c4f7ff" })
        $(this).find(".SJ").css({ "borderColor": "#c4f7ff #3a9d9a #3a9d9a  #3a9d9a", "top": "22px" })
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
        $(this).find(".SJ").css({ "borderColor": " white white #0e6596 white", "top": "17px" })
    })
    $(".hander ul li:eq(2)").mouseleave(function () {
        $(this).css({
            "backgroundColor": "#3a9d9a",
            "borderColor": "#3a9d9a"
        })
        $(this).children().css({ "color": "#c4f7ff" })
        $(this).find(".SJ").css({ "borderColor": "#c4f7ff #3a9d9a #3a9d9a  #3a9d9a", "top": "22px" })
        $(".activity").hide()
    })

    $(".hander ul li:eq(3)").mouseenter(function () {
        $(".community").show();
        $(".community").css("backgroundColor", "white");
        $(this).css({
            "backgroundColor": "white",
            "border": "1px solid #c0c0c0",
            "borderBottom": "1px solid white",
        })
        $(this).children().css({ "color": "#0e65af" })
        $(this).find(".SJ").css({ "borderColor": " white white #0e6596 white", "top": "17px" })
    })
    $(".hander ul li:eq(3)").mouseleave(function () {
        $(this).css({
            "backgroundColor": "#3a9d9a",
            "borderColor": "#3a9d9a"
        })
        $(this).children().css({ "color": "#c4f7ff" })
        $(this).find(".SJ").css({ "borderColor": "#c4f7ff #3a9d9a #3a9d9a  #3a9d9a", "top": "22px" })
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
        $(this).find(".SJ").css({ "borderColor": " white white #0e6596 white", "top": "17px" })
    })
    $(".hander ul li:eq(4)").mouseleave(function () {
        $(this).css({
            "backgroundColor": "#3a9d9a",
            "borderColor": "#3a9d9a"
        })
        $(this).children().css({ "color": "#c4f7ff" })
        $(this).find(".SJ").css({ "borderColor": "#c4f7ff #3a9d9a #3a9d9a  #3a9d9a", "top": "22px" })
        $(".serve").hide()
    })
    // 导航栏结束

    //更多按钮
    $("#dv").mouseenter(function () {
        $(this).css("backgroundColor", "#fe9f00")
    })
    $("#dv").mouseleave(function () {
        $(this).css("backgroundColor", "#fa7b00")
    })

    //录播图开始
    var num = 0;
    $(".origin>li").mouseenter(function () {
        num = $(this).index();
        $(this).css("backgroundColor", "#3a9d9a").siblings().css("backgroundColor", "white")
        $(".falls>li").eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500)
        clearInterval(timeid)
    })
    $(".origin>li").mouseleave(function () {
        timeid = setInterval(fn, 2000)
    })
    function fn() {
        num++
        if (num == $(".falls>li").length) {
            num = 0
        }
        $(".falls>li").eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
        $(".origin>li").eq(num).css("backgroundColor", "#3a9d9a").siblings().css("backgroundColor", "white");
    }
    var timeid = setInterval(fn, 2000)
    //录播图结束


    //目的地
    $(".TOP").focus(function () {
        $(".Paris").show().css("backgroundColor", "white");
        $(this).parent().css("border", "1px solid skyblue")
    })
    $(".TOP").blur(function () {
        setTimeout(function () {
            $(".Paris").hide()
        }, 200)
        $(this).parent().css("border", "1px solid #ccc")
    })


    //珠海
    $(".zhuhai").mouseenter(function () {
        $(".from").stop().slideDown()
    })
    $(".zhuhai").mouseleave(function () {
        $(".from").stop().slideUp()
    })
    // 川西
    $(".chuanxi").mouseenter(function () {
        $(".fall").stop().slideDown(500)
    })
    $(".chuanxi").mouseleave(function () {
        $(".fall").stop().slideUp(500)
    })

    $("#HK li").mouseenter(function () {
        $(this).css("backgroundColor", "#e6eef2").siblings().css("backgroundColor", "white");
    })

    $("#HK ul li").on('click', function () {
        var str = $(this).text();
        $(".TOP").val(str);
    })
})
