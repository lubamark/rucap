$(document).ready(function () {
  var $winH = $(window).height();
  var $scrollT = $(window).scrollTop();
  var $up = $('.up');
  var $header = $('.page-header');

  if($scrollT > $winH) {
    $up.fadeIn();
    $header.addClass('_fixed');
  } else if ($scrollT < $winH){
    $up.fadeOut();
    $header.removeClass('_fixed');
  }

  $(window).on('scroll', function () {
    $scrollT = $(window).scrollTop();
    if($scrollT > $winH) {
      $up.fadeIn()
      $header.addClass('_fixed');
    } else if ($scrollT < $winH){
      $up.fadeOut();
      $header.removeClass('_fixed');
    }
  });

  $up.on('click', function () {
    $('body,html').animate({scrollTop:0},800);
  });


});
