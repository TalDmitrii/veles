'use strict';

(function () {
  var windowSize = document.body.clientWidth;
  var tabletWidth = 768;

  var swiper = new Swiper('.favorites__slider', {
    autoHeight: true,
    slidesPerView: 1,
    loop: true,
    // spaceBetween: 0,
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
    windowSize = document.body.clientWidth;

    swiper.update();
  };

  window.addEventListener('resize', changeSliderSettings);
})();

'use strict';

(function () {
  var page = document.querySelector('body');
  var mainNavigation = page.querySelector('.main-navigation');
  var navigationToggle = page.querySelector('.menu-toggle');

  if (!mainNavigation && !navigationToggle) {
    return;
  }

  page.classList.remove('no-js');

  navigationToggle.addEventListener('click', function () {
    if (mainNavigation.classList.contains('main-navigation--opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  function onLinkClickHandler(evt) {
    var target = evt.target;

    if (target.tagName === 'A') {
      closeMenu();
    }
  }

  function closeMenu() {
    mainNavigation.classList.remove('main-navigation--opened');

    navigationToggle.classList.remove('menu-toggle--opened');
    navigationToggle.classList.add('menu-toggle--closed');

    bodyScrollLock.enableBodyScroll(mainNavigation);
    mainNavigation.removeEventListener('click', onLinkClickHandler);
  }

  function openMenu() {
    mainNavigation.classList.add('main-navigation--opened');

    if (navigationToggle.classList.contains('menu-toggle--closed')) {
      navigationToggle.classList.remove('menu-toggle--closed');
    }
    navigationToggle.classList.add('menu-toggle--opened');
    
    bodyScrollLock.disableBodyScroll(mainNavigation);
    mainNavigation.addEventListener('click', onLinkClickHandler);
  }
})();

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

'use strict';

(function () {
  var menu = document.querySelector('.main-navigation');

  if (!menu) {
    return;
  }

  var submenuButtons = menu.querySelectorAll('.main-navigation__submenu-button');
  var navigationToggle = document.querySelector('.menu-toggle');
  var activeButton = null;

  submenuButtons.forEach(function(item) {
    item.addEventListener('click', onSubmenuButtonClick);
  });

  // При закрытии основного меню - закрывается активное подменю.
  navigationToggle.addEventListener('click', function () {
    if (activeButton) {
      resetActiveElement(activeButton);
    }
  });

  // Обрабатывает клики на кнопках открытия подменю.
  function onSubmenuButtonClick(item) {
    var target = item.target;

    if (target.classList.contains('main-navigation__submenu-button--open')) {
      // Если кнопка открыта - удаляет соответствующие классы у этой кнопки и её родителя.
      target.classList.remove('main-navigation__submenu-button--open');
      target.parentElement.classList.remove('main-navigation__item--open');

      activeButton = null;

    } else {
      // Если предыдущий активный элемент существует - удаляет ссылку на него.
      if (activeButton) {
        resetActiveElement(activeButton);
      }

      // Если кнопка закрыта - добавляет соответствующие классы этой кнопке и её родителю.
      target.classList.add('main-navigation__submenu-button--open');
      target.parentElement.classList.add('main-navigation__item--open');

      activeButton = target;
    }
  }

  function resetActiveElement (activeElement) {
    activeElement.classList.remove('main-navigation__submenu-button--open');
    activeElement.parentElement.classList.remove('main-navigation__item--open');

    activeElement = null;
  }


})();