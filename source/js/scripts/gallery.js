var $forSlider = $('.j-gallery-for');
var $navSlider = $('.j-gallery-nav');
var $currentSlide = $('.j-gallery-current');
var $countSlide = $('.j-gallery-all');


$forSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
            $currentSlide.text(i);
            $countSlide.text(slick.slideCount);
    });



$forSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.j-gallery-controls',
    prevArrow: '<button class="gallery__control gallery__control--prev"><span class="visually-hidden">Предыдущее фото</span></button>',
    nextArrow: '<button class="gallery__control gallery__control--next"><span class="visually-hidden">Следующее фото</span></button>',
    dots: false,
    fade: true,
    asNavFor: $navSlider
});
$navSlider.slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: $forSlider,
    variableWidth: true,
    centerMode: false,
    focusOnSelect: true
});