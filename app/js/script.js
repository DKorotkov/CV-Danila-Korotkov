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
   
   // --------------------------------Загрузка класса кастомизации Select----------------------
   @@include('modules/_select.js')
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

   // --------------Загрузка портфолио----------------------
   const portfolioList = document.querySelector(".portfolio__list");
   const template = document.querySelector('#portfolioItemColne');
   if (portfolioList) {
      
      readFile("./files/portfolio/data.json", function(text){
         data = JSON.parse(text);
         data.forEach((el, i) => { 
            addPortfolioItem(el);
         });
      });
   }

   function readFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
      rawFile.send(null);
   }

   function addPortfolioItem(el){
      const protfolioDate = new Date(el.createDate);

      const clone = template.content.cloneNode(true);
      const portfolioItem = clone.querySelector(".portfolio__item");
      const portfolioImg = portfolioItem.querySelector(".portfolio__img");
      const portfolioDate = portfolioItem.querySelector(".portfolio__date");
      const portfolioName = portfolioItem.querySelector(".portfolio__name");
      const portfolioContent = portfolioItem.querySelector(".portfolio__content");
      const portfolioLink = portfolioItem.querySelector(".portfolio__link");

      
      portfolioItem.setAttribute("data-create-date", el.createDate)
      portfolioItem.setAttribute("data-type", el.type)
      portfolioItem.setAttribute("role", "listitem")

         
      portfolioImg.src = el.img;
      portfolioDate.setAttribute("datetime", el.createDate);
      portfolioDate.innerHTML = getDateToItem(protfolioDate)
      portfolioName.innerHTML = el.name
      portfolioContent.innerHTML = el.content
      portfolioLink.href = el.link

      portfolioItem.appendChild(portfolioImg)
      portfolioItem.appendChild(portfolioDate)
      portfolioItem.appendChild(portfolioName)
      portfolioItem.appendChild(portfolioContent)
      portfolioItem.appendChild(portfolioLink)

      portfolioList.appendChild(portfolioItem)
   }

   function getDateToItem(date) {
      // const monthNames = ["January", "February", "March", "April", "May", "June",
      // "July", "August", "September", "October", "November", "December"
      // ];
      const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
      return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
   }
   // ------------------------------------------------------
     
      
   })();
