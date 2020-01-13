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
