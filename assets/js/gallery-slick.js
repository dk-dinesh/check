     $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider'
});
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        prevArrow: "<img class='a-left control-c-left prev slick-prev' src='assets/img/left.svg '>",
        nextArrow:"<img class='a-right control-c-right next slick-next' src='assets/img/right.svg'>",
        centerMode: true,
        centerPadding: '10',
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
$('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var current = $(slick.$slides[currentSlide]);
  current.html(current.html());
});
