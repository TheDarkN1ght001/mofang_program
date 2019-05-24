$(function () {
    var tabs_takes = {
        "init": function (containId) {
            if (containId == null || containId == "") {
                alert("id不能为空");
                return;
            }
            $("#" + containId + ">ul>li").on("click", function () {
                tabs_takes.tabItemTakes(containId, this)
            });
            var liActiveNumber = $("#" + containId + " ul li.selectActive").length;
            if (liActiveNumber > 0) {
                var liRel = $("#" + containId + ">ul>li.selectActive").eq(0).attr("rel");
                $("#" + containId + ">div").css("display", "none");
                $("#" + containId + ">div[rel='" + liRel + "']").css("display", "block");
                var tabHrefRel = $("#" + containId + ">ul>li.selectActive").eq(0).attr("relHref");
                if (tabHrefRel != null && tabHrefRel != "") {
                    $("#" + containId + ">div[rel='" + liRel + "']").load(tabHrefRel);
                }
            } else {
                var liRel = $("#" + containId + ">ul>li").eq(0).attr("rel");
                $("#" + containId + ">ul>li").eq(0).addClass("selectActive");
                $("#" + containId + ">div").eq(0).css("display", "block");
                var tabHrefRel = $("#" + containId + ">ul>li").eq(0).attr("relHref");
                if (tabHrefRel != null && tabHrefRel != "") {
                    $("#" + containId + ">div[rel='" + liRel + "']").load(tabHrefRel);
                }
            }
        },
        "tabItemTakes": function (containId, thisObj) {
            // 让对应块显示,其余块隐藏
            var tabRel = $(thisObj).attr("rel");
            $("#" + containId + ">ul>li").removeClass("selectActive");
            $(thisObj).addClass("selectActive");
            $("#" + containId + ">div").css("display", "none");
            $("#" + containId + ">div>div").css("display", "none");
            $("#" + containId + ">div[rel='" + tabRel + "']").css("display", "block");
            $("#" + containId + ">div[rel='" + tabRel + "']>div").fadeIn(1500);


            //展示网页的函数
            // var tabHrefRel = $(thisObj).attr("relHref");
            // if (tabHrefRel != null && tabHrefRel != "") {
            //     $("#" + containId + ">div[rel='" + tabRel + "']").load(tabHrefRel);
            // }
        }
    }
    // css("display", "block")
    // css("display", "none")\
    tabs_takes.init("tabs");


    // $(".route>div>.route_what").mouseenter(function () {
    //     console.log($(".route>div>.route_what"));
    //     $(".route>div>.route_what").css({ backgroundPosition: (-534, -57) });
    // }).mouseout(function () {
    //     $(".route>div>.route_what").css({ backgroundPosition: (-6, -60) })
    // });

    $(".route_dest_icon").mouseover(function () {
        $(".route_dest_icon").find(".route_ditxt").css("display", "block");
    }).mouseout(function () {
        $(".route_dest_icon").find(".route_ditxt").css("display", "none");

    })
});
// "(-594, -60)"