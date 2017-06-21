
$(window).scroll(function () {
    var elem = $('.czlonkowie');
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
        console.log('hello');
        $(elem).find("img").addClass("animated shake")
    }
});