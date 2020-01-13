'use strict';

(function ($) {
  $('body').on('click', '[href*="#"]', function (evt) {
    var fixedOffset = 30;
    if ($(this.hash).offset() !== undefined) {
      evt.preventDefault();
      $('html,body').stop().animate({
        scrollTop: $(this.hash).offset().top - fixedOffset
      }, 1000);
    }
  });
})(jQuery);
