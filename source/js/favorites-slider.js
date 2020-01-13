'use strict';

(function () {
  var windowSize;
  var desktopWidth = 1024;
  var tabletWidth = 768;
  var slidesPerView;

  setSliderSettings();

  function setSliderSettings() {
    windowSize = document.body.clientWidth;

    if (windowSize < tabletWidth) {
      slidesPerView = 1;
      
    } else if ((windowSize >= tabletWidth) && (windowSize < desktopWidth)) {
      slidesPerView = 2;

    } else if (windowSize >= desktopWidth) {
      slidesPerView = 4;
    }
  }

  var mySwiper = new Swiper('.favorites__slider', {
    autoHeight: true,
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    loop: true,

    updateOnWindowResize: true,

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
    setSliderSettings();

    mySwiper.params.slidesPerView = slidesPerView;

    mySwiper.update();
  };

  window.addEventListener('resize', changeSliderSettings);
})();
