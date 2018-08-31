function onScroll(n){var t=$(document).scrollTop();
$(".menu-list__link").each(function(){var n=$(this);
$(n.attr("href")).position().top-44<=t?($(".menu-list__link").removeClass("menu-list__link--active"),n.addClass("menu-list__link--active")):(n.removeClass("menu-list__link--active"),n.blur())})}

$(document).ready(function(){$(document).on("scroll",onScroll),$('.menu-list__link[href^="#"]').on("click",function(n){n.preventDefault(),$(document).off("scroll"),$(".menu-list__link").each(function(){$(this).removeClass("menu-list__link--active")}),$(this).addClass("menu-list__link--active");var t=this.hash;$target=$(t),console.log($target),$("html, body").stop().animate({scrollTop:$target.offset().top-44},500,"swing",function(){$(document).on("scroll",onScroll)})})});
