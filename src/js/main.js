(function($) {
    
if ($(".top-slider_2").length) {

	$(".top-slider_2").owlCarousel({
		loop:false,
		margin:0,
		autoplay: false,
		autoplayHoverPause: false,
		smartSpeed: 500,
		// stagePadding: 65,
		lazyContent: true,
		nav:true,
		dots:true,
		navText: ["", ""],
		responsive:{
			0:{
				items:1
			}
		}
	});
};

// $(".top-slider_2 .owl-stage:first-child").css('padding-left', '0');

// $('.owl-next').click(function(){
// 	if ($('owl-next').hasClass('disabled')) {
// 		$(".top-slider_2 .owl-stage:first-child").css('padding-right', '0');
// 	}
// })

// tabs on new-search
$(".choose-header").on("click", "li", function(){

	var tabs = $(".choose-header li"),
	content = $(".table-wrap-wrap");

	tabs.removeClass("active");
	content.removeClass("active");

	$(this).addClass("active");
	content.eq($(this).index()).addClass("active");
});

// scroll bar 

$(".text").niceScroll({
	cursorcolor: '#998100',
	background: '#e2e2e2',
	autohidemode: false,
	cursorwidth: '6px',
	smoothscroll: true
});

})(jQuery);

