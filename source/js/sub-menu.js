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