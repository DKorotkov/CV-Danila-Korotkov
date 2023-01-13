(function () {
   ("use strict")


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
   // --------------------------------Загрузка класса "Вкладок (табов)"----------------------
   //  include('modules/_tabs.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса "Запрета прокрутки"----------------------
   @@include('modules/_disableScroll.js')
   // ------------------------------------------------------------------------------------

   // --------------------------------Загрузка класса "Галереи"----------------------
   // @@include('modules/_gallery.js')
   // ------------------------------------------------------------------------------------

   let currentLang = navigator.language || navigator.userLanguage;
   currentLang = currentLang.indexOf("-") > 0 ? currentLang.substring(0, currentLang.indexOf("-")).toLowerCase() : currentLang.toLowerCase()
   
   if (localStorage.getItem('currentLang')) currentLang = localStorage.getItem('currentLang')
   else localStorage.setItem('currentLang', currentLang);
   
   // ------------При загрузки страницы---------------------
   window.addEventListener('load', (event) => {
      const $aside = document.querySelector('.aside')
      const $loading = document.querySelector('.loading')
      $loading.classList.add("loading--remove")
      $loading.addEventListener("animationend", () => {
         $loading.parentElement.removeChild($loading)
      })
      $aside.classList.add("aside--load")

      setLang(currentLang)
      // readLang()

      const $vertex = document.querySelector(".main__vertex")
      if ($vertex) document.querySelector(".body").classList.add("body--has-vertex")
      
       // --------------------------------Загрузка класса кастомизации Select----------------------
       @@include('modules/_select.js')
       // ------------------------------------------------------------------------------------
   });
   // ------------------------------------------------------

   // -------------Загрузка языков--------------------------
  @@include('parts/lang.js')
   // ------------------------------------------------------

   // -----------Модальное окно-----------------------------
   @@include('parts/modal.js')
   // ------------------------------------------------------

   // -----------Галерея------------------------------------
   // g = new GalleryDK({
   // selector: ".gallery", // селектор контейнера, который объединяет все изображения
   // focusTrap: true,
   // collapseOnFocusOut: false,
// })
   // ------------------------------------------------------

   // --------------Отправка почты--------------------------
   @@include('parts/email.js')
   // ------------------------------------------------------

   // --------------Загрузка портфолио----------------------
   @@include('parts/portfolio.js')
   // ------------------------------------------------------

   // --------------Смена языка-----------------------------
   const langSwitch = document.querySelector("#lang-switch")
   if (currentLang === 'en') langSwitch.checked = true
   langSwitch.addEventListener("click", () => {
      if (langSwitch.checked) currentLang = 'en'    
      else currentLang = 'ru'
      localStorage.setItem('currentLang', currentLang);
      setLang(currentLang)
   })
   // ------------------------------------------------------
   
   
   })()