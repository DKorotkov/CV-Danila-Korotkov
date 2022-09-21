(function () {
   ("use strict");

   // -------------Загрузка шрифтов через скрипт------------
   @@include('modules/_fonts.js')
   // ------------------------------------------------------

   // --------------------------------Загузка класса Аккардион----------------------------
   // include('modules/_accordion.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса Валидации форм----------------------
   @@include('modules/_formValidation.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса Событий "касаний"----------------------
   // include('modules/_eventTouch.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса "Общего класса"----------------------
   @@include('modules/__noda.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса "Модальных окон"----------------------
   @@include('modules/_modal.js')
   // ------------------------------------------------------------------------------------
   // // --------------------------------Загрузка класса "Вкладок (табов)"----------------------
   // @@include('modules/_tabs.js')
   // // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса "Запрета прокрутки"----------------------
   @@include('modules/_disableScroll.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса "Галереи"----------------------
   // @@include('modules/_gallery.js')
   // ------------------------------------------------------------------------------------

   // -----------Модальное окно-----------------------------
   const humburgerBtn = document.querySelector(".hamburger");
   const logo = document.querySelector(".header__logo");
   const mainNav = new ModalDK({
      selector: ".nav",
      openBtnsSelector: ['.hamburger'],
      collapseOnFocusOut: true,
      onOpen() {
         humburgerBtn.classList.add("is-active");
         humburgerBtn.setAttribute("aria-expanded","true");
         logo.classList.add("header__logo--active");
      },
      onClose() {
         humburgerBtn.classList.remove("is-active");
         humburgerBtn.setAttribute("aria-expanded", "false");
         logo.classList.remove("header__logo--active");
      },
   });
   // ------------------------------------------------------

   // -----------Галерея------------------------------------
   // g = new GalleryDK({
   // selector: ".gallery", // селектор контейнера, который объединяет все изображения
   // focusTrap: true,
   // collapseOnFocusOut: false,
// });
   // ------------------------------------------------------

  
})();
