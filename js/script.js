//Align images and buttons on page load
$(document).ready(function() {

    var viewportWidth = $(window).width();
    if (viewportWidth <= 767) {
            $(".about_img").removeClass("pull-right").addClass("pull-left");
            $(".btn_res").removeClass("col-sm-12").addClass("pull-left");
    };

    if (viewportWidth > 767) {
            $(".about_img").addClass("pull-right").removeClass("pull-left");
            $(".btn_res").addClass("col-sm-12").removeClass("pull-left");
    };

});

//Aling images and buttons on window resize
$(window).resize(function() {
	var viewportWidth = $(window).width();
    if (viewportWidth <= 767) {
            $(".about_img").removeClass("pull-right").addClass("pull-left");
            $(".btn_res").removeClass("col-sm-12").addClass("pull-left");
    };

    if (viewportWidth > 767) {
            $(".about_img").addClass("pull-right").removeClass("pull-left");
            $(".btn_res").addClass("col-sm-12").removeClass("pull-left");
    };
});
