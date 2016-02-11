$(document).ready(function() {
    $("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".content-footer").offset().top
    }, 600);
});
    $("#portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("a.anchor").offset().top
    }, 600);
});
});