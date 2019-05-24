$(function () {
var regName=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    var regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    var regPassword=/^\d{6,}$/;
    var arr=[regName,regEmail,regPassword]
    $(".navlist").mouseover(function () {

        $(this).children("div").show().parent().siblings().children("div").hide();
    });

    $(".navlist").mouseout(function () {

        $(this).children("div").hide().parent().siblings().children("div").hide();

    });
    var inputs = $("#user_form input:lt(3)");
    // console.log(inputs);
    inputs.focus(function () {
        $(this).css("borderColor", "orange");

    });
    inputs.blur(function () {
        $(this).css("borderColor", "#8e9198");
        var value = $(this).val();


        var idx=$(this).index();
        var flag = true;
        if (value.length == 0) {
            flag = false;
            $(this).next("i").hide().next("div.notice").show();
            $("input#ljzc").css("backgroundColor", "#ccc")
        } else {



            $(this).next("i").show().next("div").hide();

        }
        if(!(arr[idx]).test(inputs.eq(idx).val())){
            $(this).next("i").hide().next("div.notice").hide().next("div.notice3").show();
        }
        else{
            $(this).next("i").show().next("div.notice").hide().next("div.notice3").hide();

        }
        for (var i = 0; i < inputs.length; i++) {
            if (inputs.eq(i).val() == 0) {
                flag = false;
                return flag;
            }
            flag = true;
        }
        if (flag) {
            $("input#ljzc").css("backgroundColor", "#ff8f3a")
        }

        console.log(value);





    });
    $("#user_form input#xieyi1").click(function () {

        var chk = $(this).prop("checked");


        if (chk) {
            $("#notice2").show();
            $("#notice1").hide();
            if (inputs.val().length === 0) {
                inputs.next("i").hide().next("div").show();

            }

        } else {
            $("#notice1").show();
            $("#notice2").hide();
        }


    })


})

