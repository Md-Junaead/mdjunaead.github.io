$(document).ready(function(){
	$nav=$('.nav');
	$toggleCollapse=$('.toggle-collapse');

	/*-----Click Event On Toggle Menu---*/
	$toggleCollapse.click(function(){
		$nav.toggleClass('collapse');
	})

	//Owl-carousel for blog

	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay:false,
		autoplayTimeout:3000,
		dots:false,
		nav:true,
		navText:[$('.owl-navigation.owl-nav-prev'),$('.owl-navigation.owl-nav-next')]
	});

});