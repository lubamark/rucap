$(document).ready(function () {
    var $projects = $('.j-projects-gallery');

    $projects.each(function () {
        var $projectsSlider = $(this).find('.j-projects-slider');
        var $projectsPreview = $(this).find('.j-projects-preview');
        var $controls = $(this).find('.j-projects-controls');

        $projectsSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $controls,
            prevArrow: '<button class="projects__control projects__control--prev"><span class="visually-hidden">Предыдущее фото</span></button>',
            nextArrow: '<button class="projects__control projects__control--next"><span class="visually-hidden">Следующее фото</span></button>',
            dots: false,
            fade: true,
            asNavFor: $projectsPreview
        }); $projectsPreview.slick({
            arrows: false,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: $projectsSlider,
            variableWidth: true,
            centerMode: false,
            focusOnSelect: true
        });
    });

});

