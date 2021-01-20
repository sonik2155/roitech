$(document).ready(function() {


	// $('.header__burger').click(function(event) {
	// 	$('.header__burger','.header__menu').toggleClass('.active');
	// });


	$('.slider-body__item').slick({
		
		arrows:true,
		prevArrow: "<img src='img/arrows/Prev__1.svg' class='prev__1' alt='1'>",
		nextArrow: "<img src='img/arrows/Next__1.svg' class='next__1' alt='2'>",
		dots:true, 
		adaptiveHeight:true, 
		speed:2000,
		easing:'ease',
		infinite:true,
		autoplay:false,
		autoplaySpeed:2000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		slidesToShow:1,
		appendArrows:$('.butbig'),
		// appendDots:$('.dotss__buttons'),


});


	$('.slider__for__partners').slick ({
		
		arrows:true,
		prevArrow: "<img src='img/partners/arrows/left__partner.svg' class='next-button' alt='1'>",
		nextArrow: "<img src='img/partners/arrows/right__partner.svg' class='back-button' alt='2'>",
		dots:false, 
		speed:1000,
		easing:'ease',
		infinite:true,
		adaptiveHeight:true,
		autoplay:false,
		autoplaySpeed:false,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		slidesToShow:4,
		slidesToScroll: 2,
		responsive: [
    {
      breakpoint: 1500,
      settings: {
       slidesToShow: 3,
       slidesToScroll: 2,
      } },
      {
      	breakpoint: 1190,
      	settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    // {
    // 	breakpoint: 550,
    // 	settings: {
    // 		slidesToShow: 1,
    // 		slidesToScroll: 1,
    // 		centerMode: true,
    // 	}
    // },




     
    ]








		// appendArrows:$('.butbig'),
		// appendDots:$('.dotss__buttons'),


	});
});
	


$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

});
