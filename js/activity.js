var hide = document.getElementById('hide');
var hideT = document.getElementById('hideTow');
var bm = document.querySelectorAll('.character>div');
var goTop = document.getElementById('top');
var an = document.getElementsByClassName('an')
var bao = document.getElementsByClassName('bm')
// var $b_bot = $('#b-bottom')

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

var nnn = 0;
for (var i = 0; i < bm.length; i++) {
    bm[i].onmouseover = function () {
        nnn = this.style.backgroundColor;
        this.style.background = '#4bc9c7';
    }
    bm[i].onmouseout = function () {
        nnn = this.style.backgroundColor;
        this.style.background = '#2bbfbd';
    }
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

$(function () {
    $('#a-bottom').on('click', function () {
        $('li.non').css('display', 'block');
        $('li.non:last-child').css('border-bottom', '1px solid #eee');
        $(this).css('display', 'none');
        $('#b-bottom').css('display', 'block')
    });
});

$(function () {
    $('#b-bottom').on('click', function () {
        $('li.twice').css('display', 'block');
        $('li.twice:last-child').css('border-bottom', '1px solid #eee')
    })
})


// var ga;

// for (var i = 0; i <= an.length - 1; i++) {
//     //这里获取文本框的值，可以赋值给变量或者其他操作，这里只做出弹出
//     var sk = an[i].innerHTML;
//     // console.log(sk);

//     // var sz = ('')
//     var srt = sk;
//     console.log(srt);

//     var ko = srt.replace(/ /g, '');
//     var di = ko.replace(/:/g, '')
//     ga = di.replace(/-/g, '');
// }

$(function () {
    function CurentTime() {
        var now = new Date();

        var year = now.getFullYear(); //年
        var month = now.getMonth() + 1; //月
        var day = now.getDate(); //日

        var hh = now.getHours(); //时
        var mm = now.getMinutes(); //分
        var ss = now.getSeconds(); //秒

        var clock = year + "";

        if (month < 10)
            clock += "0";

        clock += month + "";

        if (day < 10)
            clock += "0";

        clock += day + "";

        if (hh < 10)
            clock += "0";

        clock += hh + "";
        if (mm < 10) clock += '0';
        clock += mm + "";
        return (clock);
    }

    var sj = CurentTime();

    // console.log(sj);
    // console.log(ga);
    var ga;

    for (var i = 0; i <= an.length - 1; i++) {
        //这里获取文本框的值，可以赋值给变量或者其他操作，这里只做出弹出
        var sk = an[i].innerHTML;
        // console.log(sk);

        // var sz = ('')
        var srt = sk;
        // console.log(srt);

        var ko = srt.replace(/ /g, '');
        var di = ko.replace(/:/g, '')
        ga = di.replace(/-/g, '');

        // console.log(ga);

        var newSj = parseInt(sj);//当前时间
        var newGa = parseInt(ga);//截止时间

        // console.log(newSj);
        // console.log(newGa);


        // console.log(newSj > newGa)

        // for (var o = 0; o <= bm.length - 1; o++) {
        //     if (sj > ga[o]) {
        //         bao[o].style.backgroundColor = '#666';
        //         bao[o].innerHTML = '报名关闭';
        //         for (var j = 0; j < bm.length; j++) {
        //             bm[j].onmouseover = null;
        //             bm[j].onmouseout = null;
        //         }
        //     }
        // }
        if (newSj > newGa) {
            bao[i].innerHTML = "活动结束"
            bao[i].style.backgroundColor = '#aeaeae'
            bm[i].onmouseover = null;
            bm[i].onmouseout = null;

        } else {
            bao[i].innerHTML = "可以报名"
        }
    }

})
