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
   // --------------------------------Загрузка класса "Вкладок (табов)"----------------------
   //  include('modules/_tabs.js')
   // ------------------------------------------------------------------------------------

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
   // --------------Отправка почты--------------------------
   // 06cc9a6d-ae50-4dfb-ac79-1ec7f4823816 
   const btnSendMail = document.querySelector('#btnSendMail');
   const form  = document.querySelector("#form");
   const sendMail = (e) => {
      e.preventDefault();
      
      if (FormValid.checkValid(form)) {

         btnSendMail.classList.add("msg--sending");
         btnSendMail.setAttribute("disabled", "");
         const removeDone = ()=>{
            btnSendMail.classList.remove("msg");
            document.querySelector(".msg--done").removeEventListener("animationend", removeDone);
            btnSendMail.classList.remove("msg--done");
         }

         // таймаут для "отправки"
         setTimeout(() => {
            btnSendMail.classList.remove("msg--sending");
            btnSendMail.removeAttribute("disabled");
            btnSendMail.classList.add("msg");
            btnSendMail.classList.add("msg--send");
            btnSendMail.setAttribute("data-type", "ok");
         }, 2000);

         // таймаут по которому показываем иконку
         setTimeout(() => {
            
            btnSendMail.classList.remove("msg--send");
            btnSendMail.removeAttribute("data-type");
            btnSendMail.classList.add("msg--done");

            document.querySelector(".msg--done").addEventListener("animationend", removeDone);

         }, 4000);


      // Email.send({
      //    SecureToken : "06cc9a6d-ae50-4dfb-ac79-1ec7f4823816 ",
      //    To : 'danila.korotkov@gmail.com',
      //    From : "you@isp.com",
      //    Subject : "This is the subject",
      //    Body : "And this is the body"
      // }).then(
      // message => console.log(message)
      // );
      }
   }

    if (btnSendMail) btnSendMail.addEventListener("click", (e)=> sendMail(e));
      // ------------------------------------------------------
     
      
   })();
