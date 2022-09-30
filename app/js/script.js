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
   const humburgerBtn = document.querySelector(".hamburger")
   const logo = document.querySelector(".header__logo")
   const mainNav = new ModalDK({
      selector: ".nav",
      openBtnsSelector: ['.hamburger'],
      collapseOnFocusOut: true,
      onOpen() {
         humburgerBtn.classList.add("is-active")
         humburgerBtn.setAttribute("aria-expanded","true")
         logo.classList.add("header__logo--active")
      },
      onClose() {
         humburgerBtn.classList.remove("is-active")
         humburgerBtn.setAttribute("aria-expanded", "false")
         logo.classList.remove("header__logo--active")
      },
   })
   // ------------------------------------------------------

   // -----------Галерея------------------------------------
   // g = new GalleryDK({
   // selector: ".gallery", // селектор контейнера, который объединяет все изображения
   // focusTrap: true,
   // collapseOnFocusOut: false,
// })
   // ------------------------------------------------------

   // --------------Отправка почты--------------------------
   // 06cc9a6d-ae50-4dfb-ac79-1ec7f4823816 
   const btnSendMail = document.querySelector('#btnSendMail')
   const form  = document.querySelector("#form")
   const sendMail = (e) => {
      
      const emailParams = {
         from_name: 'James',
         reply_to: 's@s',
         message: "messege"
      };

      e.preventDefault()
      
      if (FormValid.checkValid(form)) {

         // btnSendMail.classList.add("msg--sending")
         // btnSendMail.setAttribute("disabled", "")
         // const removeDone = ()=>{
         //    btnSendMail.classList.remove("msg")
         //    document.querySelector(".msg--done").removeEventListener("animationend", removeDone)
         //    btnSendMail.classList.remove("msg--done")
         // }

         // // таймаут для "отправки"
         // setTimeout(() => {
         //    btnSendMail.classList.remove("msg--sending")
         //    btnSendMail.removeAttribute("disabled")
         //    btnSendMail.classList.add("msg")
         //    btnSendMail.classList.add("msg--send")
         //    btnSendMail.setAttribute("data-type", "ok")
         // }, 2000)

         // // таймаут по которому показываем иконку
         // setTimeout(() => {
            
         //    btnSendMail.classList.remove("msg--send")
         //    btnSendMail.removeAttribute("data-type")
         //    btnSendMail.classList.add("msg--done")

         //    document.querySelector(".msg--done").addEventListener("animationend", removeDone)

         // }, 4000)

         emailjs.send('service_aq7mfsb', 'template_sty9rtw', emailParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });

      }
   }

    if (btnSendMail) {
      emailjs.init("2WyxNkrXZ5yfWQ-uh")
      btnSendMail.addEventListener("click", (e)=> sendMail(e))
   }
   // ------------------------------------------------------

   // --------------Загрузка портфолио----------------------
   function initPortfolio(element, filePath) {
      return {
         changedData: null,
         readFile() {
            const rawFile = new XMLHttpRequest()
            rawFile.overrideMimeType("application/json")
            rawFile.open("GET", filePath, true)
            rawFile.onreadystatechange = () => {
               if (rawFile.readyState === 4 && rawFile.status == "200") {
                  this.fileData = JSON.parse(rawFile.responseText)
                  this.changedData = [...this.fileData]
                  this.sortBy('createDate', 'new')
                  this.printPorfolioItems(this.changedData)
               }
            }
               rawFile.send(null)
         },
         printPorfolioItems(data) {
            this.clearPorfolioList()
            data.forEach((el) => { 
               this.addPortfolioItem(el)
            })
         },
         addPortfolioItem (el) {
            const protfolioDate = new Date(el.createDate)
            const clone = $template.content.cloneNode(true)
            const portfolioItem = clone.querySelector(".portfolio__item")
            const portfolioImg = portfolioItem.querySelector(".portfolio__img")
            const portfolioDate = portfolioItem.querySelector(".portfolio__date")
            const portfolioName = portfolioItem.querySelector(".portfolio__name")
            const portfolioContent = portfolioItem.querySelector(".portfolio__content")
            const portfolioMoreInfo = portfolioItem.querySelector(".portfolio__more-info")
            const portfolioLink = portfolioItem.querySelector(".portfolio__link")
            
            portfolioItem.setAttribute("data-create-date", el.createDate)
            portfolioItem.setAttribute("data-type", el.type)
            portfolioItem.setAttribute("role", "listitem")
               
            portfolioImg.src = el.img
            portfolioDate.setAttribute("datetime", el.createDate)
            portfolioDate.innerHTML = this.getDateToItem(protfolioDate)
            portfolioName.innerHTML = el.name
            portfolioContent.innerHTML = el.content
            portfolioMoreInfo.innerHTML = el.more_info
            portfolioLink.href = el.link

            portfolioItem.appendChild(portfolioImg)
            element.appendChild(portfolioItem)
         },
         getDateToItem(date) {
            // const monthNames = ["January", "February", "March", "April", "May", "June",
            // "July", "August", "September", "October", "November", "December"
            // ]
            const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
            return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
         },
         clearPorfolioList() {
            element.innerHTML = ''
         },
         filterBy(field, value) {
            if (value === 'all') {
               this.changedData = [...this.fileData]
               return
            }
            this.changedData = this.fileData.filter(el => el[field] === value)
         },
         sortBy(field, value) {
            switch (value) {
               case "new":
                  this.changedData = this.changedData.sort((a, b) => a[field] < b[field] ? 1 : -1)
                  break
               case "old":
                  this.changedData = this.changedData.sort((a, b) => a[field] > b[field] ? 1 : -1)
                  break
               default:
                  this.changedData = this.shuffle(this.changedData)
               }
         },
         shuffle(array) {
            let currentIndex = array.length,  randomIndex;
            while (currentIndex != 0) {
               randomIndex = Math.floor(Math.random() * currentIndex);
               currentIndex--;
               [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
         }
      }
   }

   
   const $portfolioList = document.querySelector(".portfolio__list")
   const $template = document.querySelector('#portfolioItemColne')
   
   if ($portfolioList) { 
      const myPortfolioList = initPortfolio($portfolioList, './files/portfolio/data.json')  
      myPortfolioList.readFile()
         
      // -----------------Сортировка портфолио-----------------
      const $selects = document.querySelectorAll(".options__select")
      if ($selects) {
         $selects.forEach($select => {
            $select.addEventListener("change", () => changeSelect($selects))
            $select.addEventListener("menuchange", () => changeSelect($selects))
         })
      }

      function changeSelect($selects){
         const data = {}
         $selects.forEach(select => {
            data[select.dataset.type] = {name: select.name, value: select.value}
         })
         myPortfolioList.filterBy(data.filter.name, data.filter.value)
         myPortfolioList.sortBy(data.sort.name, data.sort.value)
         myPortfolioList.printPorfolioItems(myPortfolioList.changedData)
      }
      // ------------------------------------------------------
      
   }
   // ------------------------------------------------------
   })()