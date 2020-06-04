$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: "<div class='slick-prev'><i class='fa fa-arrow-circle-right'></i></div>",
		prevArrow: "<div class='slick-next'><i class='fa fa-arrow-circle-left'></i></div>",
		centerMode: true,
		centerPadding: '0',
		responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

  ]
	});
});
