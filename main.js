$(document).ready(function() {
    $(window).scroll(function () {
        var elem = $('.czlonkowie');
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
            $(elem).find("img").addClass("animated bounce")
        } else {
            $(elem).find("img").removeClass("animated bounce")
        }

    });

    $(window).scroll(function () {
        var elem = $('#funkcjepodstawowe');
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
            $(elem).find("i").addClass("animated shake")
        } else {
            $(elem).find("i").removeClass("animated shake")
        }
    });

    $('.funkcja').click(function() {
        $('.animacja').not(this).removeClass('animacja');
        $(this).toggleClass('animacja');
    });
});
// window.addEventListener('scroll', function () {
// var paralaksa = document.querySelector(".paralaksa");
// var offset = window.scrollY;
// paralaksa.style.backgroundPositionY = offset / 2 - 200 + 'px'
// })
$(window).scroll(function () {
    var paralaksa = $(".paralaksa");
    var offset = $(this).scrollTop();
    paralaksa.css("background-position-y", offset / 2 - 200);
});

$(window).scroll(function () {
    var paralaksa = $(".zajawka h2");
    var offset = $(this).scrollTop();
    paralaksa.css("top", 180 + offset / 4);
});
