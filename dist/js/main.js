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

$('.top-slider-section').on('click', '.owl-next', function(){
	if($(this).hasClass('disabled')) {
			$('.owl-stage-outer').addClass('no-dark');
		}
		else {
			$('.owl-stage-outer').removeClass('no-dark');
		}
})

$('.top-slider-section').on('click', '.owl-prev', function(){
	if($('.owl-next').hasClass('disabled')) {
		$('.owl-stage-outer').addClass('no-dark');
	}
	else {
		$('.owl-stage-outer').removeClass('no-dark');
	}
})

$('.place-sel').multiselect();

$('.tabs-search-by-type .form-controlls .left').click(function(){
	$('.checkboxes-addition').slideToggle(300);
	$('.tabs-search-by-type .form-controlls .left span').toggleClass('no-aft');
	$(this).toggleClass('cl-addition');
})

})(jQuery);

