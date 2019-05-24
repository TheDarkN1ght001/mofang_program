$(function () {
    var i = 1;
    $('.CoverImg').fadeOut(8000);
    setInterval(function () {
        ++i;
        if (i > 5) {
            i = 1;
        }
        $('.CoverImg').attr('src', '../img/register/login_cover_all' + i + '.jpg').fadeIn(4000, function () {

            $('.CoverImg').attr('src', '../img/register/login_cover_all' + i + '.jpg').fadeOut(4000, function () {

            });
        });

    }, 8000);
});
