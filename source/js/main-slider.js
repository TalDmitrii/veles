'use strict';

(function () {
  var windowSize = document.body.clientWidth;
  var tabletWidth = 768;

  var swiper = new Swiper('.new-features__slider', {
    autoHeight: true,
    slidesPerView: 1,
    loop: true,
    // spaceBetween: 0,
    updateOnWindowResize: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
  function changeSliderSettings() {
    windowSize = document.body.clientWidth;

    swiper.update();
  };

  window.addEventListener('resize', changeSliderSettings);
})();
