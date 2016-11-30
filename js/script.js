//Align images and buttons on page load
$(document).ready(function() {

    var viewportWidth = $(window).width();

    if (viewportWidth <= 767) {
        $(".about_img").removeClass("pull-right").addClass("pull-left");
        $(".btn_res").removeClass("text-center").addClass("pull-left");
    } else if (viewportWidth > 767) {
        $(".about_img").addClass("pull-right").removeClass("pull-left");
        $(".btn_res").addClass("text-center");
    };

});

//Aling images and buttons on window resize
$(window).resize(function() {
	var viewportWidth = $(window).width();

    if (viewportWidth <= 767) {
        $(".about_img").removeClass("pull-right").addClass("pull-left");
        $(".btn_res").removeClass("text-center").css("margin", 0);
    } else if (viewportWidth > 767) {
        $(".about_img").addClass("pull-right").removeClass("pull-left");
        $(".btn_res").addClass("text-center");
    };
 });
