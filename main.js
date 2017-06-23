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
});

$(document).ready(function(){
    $('.funkcja').click(function() {
        $('.animacja').not(this).removeClass('animacja');
        $(this).toggleClass('animacja');
    });
});
