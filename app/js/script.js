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

   // ------------При загрузки страницы---------------------
   let currentLang = navigator.language || navigator.userLanguage;
   currentLang = currentLang.indexOf("-") > 0 ? currentLang.substring(0, currentLang.indexOf("-")).toLowerCase() : currentLang.toLowerCase()

   if (localStorage.getItem('currentLang')) currentLang = localStorage.getItem('currentLang')
   else localStorage.setItem('currentLang', currentLang);

   window.addEventListener('load', (event) => {
      const $aside = document.querySelector('.aside')
      const $loading = document.querySelector('.loading')
      $loading.classList.add("loading--remove")
      $loading.addEventListener("animationend", () => {
         $loading.parentElement.removeChild($loading)
      })
      $aside.classList.add("aside--load")

      // currentLang= 'en'
      // if (currentLang !== 'ru') 
      setLang(currentLang)
      
      // readLang()
      
       // --------------------------------Загрузка класса кастомизации Select----------------------
       @@include('modules/_select.js')
       // ------------------------------------------------------------------------------------
   });
   // ------------------------------------------------------

   // -------------Загрузка языков--------------------------
  
   const langObjHead = {
      "content": {
         "Sait_portfolio_front-end_": {
               "ru": "Сайт портфолио front-end разработчика Данилы Короткова ",
               "en": "Portfolio of Front-End Developer Danila Korotkov"
         },
         "front-end,_front,_razrabo": {
               "ru": "front-end, фронт, разработка, web, вэб, веб, создание сайтов, junior, html, js, wordpress",
               "en": "front-end, фронт, разработка, web, вэб, веб, создание сайтов, junior, html, js, wordpress"
         },
         "Danila_Korotkov_": {
               "ru": "Данила Коротков ",
               "en": "Данила Коротков "
         },
         "_Danila_Korotkov_": {
               "ru": " Данила Коротков ",
               "en": "Данила Коротков "
         },
         "ru_RU": {
               "ru": "ru_RU",
               "en": "en_EN"
         },
         "Portfolio": {
               "ru": "Портфолио",
               "en": "Portfolio"
         },
         "Danila_Korotkov_CV": {
               "ru": "Данила Коротков CV",
               "en": "Danila Korotkov CV",
         },
         "summary": {
               "ru": "summary",
               "en": "summary"
         },
         "Rezume": {
            "ru": "Резюме",
            "en": "Summary"
        },
         "Kontakty": {
            "ru": "Контакты",
            "en": "Contacts",
        },
         "Danila_Korotkov": {
            "ru": "Данила Коротков",
            "en": "Danila Korotkov",
        },
         "Obo_mne": {
            "ru": "Обо мне",
            "en": "About me",
        },
      },
      "text": {
         "Danila_Korotkov_CV_|_Port": {
               "ru": "Данила Коротков CV | Портфолио",
               "en": "Danila Korotkov CV | Portfolio"
         },    
         "Danila_Korotkov_CV_|_Kont": {
            "ru": "Данила Коротков CV | Контакты",
            "en": "Danila Korotkov CV | Contacts"
         },
         "Danila_Korotkov_CV_|_Rezu": {
            "ru": "Данила Коротков CV | Резюме",
            "en": "Danila Korotkov CV | Summary"
         },
         "Danila_Korotkov_CV_|_Obo_": {
            "ru": "Данила Коротков CV | Обо мне",
            "en": "Danila Korotkov CV | About me"
         }
      },
   }

   const langObjHeader = {
    "text": {
        "Propustit_navigaciu": {
            "ru": "Пропустить навигацию",
            "en": "Skip navigation",
        },
        "Obo_mne": {
            "ru": "Обо мне",
            "en": "About me"
        },
        "Portfolio": {
            "ru": "Портфолио",
            "en": "Portfolio"
        },
        "Rezume": {
            "ru": "Резюме",
            "en": "Summary",
        },
        "Kontakty": {
            "ru": "Контакты",
            "en": "Contacts",
        },
        'Zagruzka...': {
            "ru": "Загрузка...",
            "en": "Loading...",
        }
    },
    "aria": {
        "Otkryt_osnovnuu_navgaciu": {
            "ru": "Открыть основную навгацию",
            "en": "Open the main Navigation",
        },
        "Glavnaya_navigaciya": {
            "ru": "Главная навигация",
            "en": "Main Navigation",
        }
    }
   }

   const langObjFooter = {
    "text": {
        "Telefon": {
            "ru": "Телефон",
            "en": "Phone",
        },
        "Socialnye_seti": {
            "ru": "Социальные сети",
            "en": "Social networks",
        }
    },
    "aria": {
        "Profil_na_GitHub": {
            "ru": "Профиль на GitHub",
            "en": "GITHUB profile",
        },
        "Profil_na_GitBook": {
            "ru": "Профиль на GitBook",
            "en": "GitBook profile",
        },
        "Profil_v_instagram": {
            "ru": "Профиль в instagram",
            "en": "Instagram profile"
        },
        "Svyazatsya_cherez_whatsap": {
            "ru": "Связаться через whatsapp",
            "en": "Contact through WhatsApp",
        },
        "Svyazatsya_cherez_telegra": {
            "ru": "Связаться через telegram",
            "en": "Contact through Telegram",
        }
    }
}

   const langObjIndex = {
    "text": {
        "OBO_MNE": {
            "ru": "ОБО МНЕ",
            "en": "ABOUT ME",
        },
        "Front-End_razrabotchik": {
            "ru": "Front-End разработчик",
            "en": "Front-End Developer",
        },
        "Privet,_Mir!_Jivu_v_Sankt": {
            "ru": "Привет, Мир! Живу в Санкт-Петербурге, люблю веб и верю в лучшее.",
            "en": "Hello World! I live in St. Petersburg, I love web and believe in the best."
        },
        "Moi_osnovnoi_stek:": {
            "ru": "Мой основной стэк:",
            "en": "My main stack:",
        },
        "portfolio": {
            "ru": "портфолио",
            "en": "portfolio",
        },
        "rezume": {
            "ru": "резюме",
            "en": "summary",
        }
    },
    "alt": {
        "Fotografiya_Danily_Korotk": {
            "ru": "Фотография Данилы Короткова",
            "en": "Photo of Danila Korotkov",
        }
    },
    "html": {
        "Danila_<em_class=\"about__": {
            "ru": "Данила <em class=\"about__header-accent\">Коротков</em>",
            "en": "Danila <em class=\"about__header-accent\">Korotkov</em>",
        }
    },
    "aria": {
        "Bystrye_ssylki": {
            "ru": "Быстрые ссылки",
            "en": "Quick links",
        }
    }
   }

   const langObjContacts = {
    "text": {
        "Otpravit_soobshchenie": {
            "ru": "Отправить сообщение",
            "en": "Send a message",
        },
        "Imya": {
            "ru": "Имя",
            "en": "Name",
        },
        "Soobshchenie": {
            "ru": "Сообщение",
            "en": "Message",
        },
        "otpravit": {
            "ru": "отправить",
            "en": "send",
        },
        "KONTAKTY": {
            "ru": "КОНТАКТЫ",
            "en": "CONTACTS",
        },
        "Telefon": {
            "ru": "Телефон", 
            "en": "Phone",
        },
        "Adres": {
            "ru": "Адрес",
            "en": "Address",
        },
        "Sankt-Peterburg,_m._Prosp": {
            "ru": "Санкт-Петербург, м. Проспект Славы",
            "en": "St. Petersburg, metro st. Prospect Glory",
        }
    },
    "title": {
        "Soobshchenie_otpravleno": {
            "ru": "Сообщение отправлено",
            "en": "Message sent",
        },
        "Oshibka_pri_otpravke_soob": {
            "ru": "Ошибка при отправке сообщения",
            "en": "Error when sending a message",
        }
    }
   }

   const langObjPortfolio = {
    "text": {
        "PORTFOLIO": {
            "ru": "ПОРТФОЛИО",
            "en": "PORTFOLIO",
        },
        "Sortirovat_po_date": {
            "ru": "Сортировать по дате",
            "en": "Sort by date",
        },
        "Snachala_novye": {
            "ru": "Сначала новые",
            "en": "New first",
        },
        "Snachala_starye": {
            "ru": "Сначала старые",
            "en": "Old first",
        },
        "V_sluchainom_poryadke": {
            "ru": "В случайном порядке",
            "en": "In random order",
        },
        "Sortirovat_po_tipu": {
            "ru": "Сортировать по типу",
            "en": "Sort by type",
        },
        "Vse": {
            "ru": "Все",
            "en": "All",
        },
        "Portfolio": {
            "ru": "Портфолио",
            "en": "Portfolio",
        },
        "Rabota": {
            "ru": "Работа",
            "en": "Work",
        }
    },
    "title": {
        "Otkryt_proekt_v_novom_okn": {
            "ru": "Открыть проект в новой вкладке",
            "en": "Open a project in a new tab",
        }
    }
   }

   const langObjResume = {
    "text": {
        "REZUME": {
            "ru": "РЕЗЮМЕ",
            "en": "SUMMARY",
        },
        "OBRAZOVANIE": {
            "ru": "ОБРАЗОВАНИЕ",
            "en": "Education",
        },
        "Tehnik": {
            "ru": "Техник",
            "en": "Technique",
        },
        "Sankt-Peterburgskii_Kolle": {
            "ru": "Санкт-Петербургский Колледж Информационных Технологий",
            "en": "St. Petersburg College of Information Technologies",
        },
        "Injener": {
            "ru": "Инженер",
            "en": "Engineer",
        },
        "Sankt-Peterburgskii_Gosud": {
            "ru": "Санкт-Петербургский Государственный Университет Телекоммуникаций им. проф. Бонч-Бруевича",
            "en": "St. Petersburg State University of Telecommunications named Bonch-Bruevich",
        },
        "RABOTA": {
            "ru": "РАБОТА",
            "en": "Work",
        },
        "FGUP_Pochta_Rossii": {
            "ru": "ФГУП Почта России",
            "en": "Russian Post",
        },
        "Elektromehanik": {
            "ru": "Электромеханик",
            "en": "Electromechanics",
        },
        "Peterburgskii_Metropolite": {
            "ru": "Петербургский Метрополитен",
            "en": "Petersburg metro",
        },
        "Starshii_elektromehanik": {
            "ru": "Старший электромеханик",
            "en": "Senior electrician",
        },
        "2016_-_po_n.v.": {
            "ru": "2016 - по н.в.",
            "en": "2016 - until now",
        }
    }
   }

   const langObjPortfolioWorks = {
      "text": {
         "Animaciya_blokov": {
            "ru": "Анимация блоков",
            "en": "Block animation"
         },
         "Popytka_sdelat_animacu_bl": {
            "ru": "Попытка сделать анимацю блоков, по примеру макета из инстаграм",
            "en": "An attempt to make an animated block, following the example of a layout from Instagram"
         },
         "Konstruktor_burgera": {
            "ru": "Конструктор бургера",
            "en": "Burger designer"
         },
         "Verstka_maketa_konstrukto": {
            "ru": "Верстка макета конструктора бургера",
            "en": "Burger designer layout"
         },
         "Sait_dizainerskoi_kompani": {
            "ru": "Сайт дизайнерской компании",
            "en": "The site of the designer company"
         },
         "Verstka_maketa_kompanii,_": {
            "ru": "Верстка макета компании, которая занимается дизайном помещений",
            "en": "Layout of the company's that is engaged in the design of the premises"
         },
         "Stranica_portfolio_s_anim": {
            "ru": "Страница портфолио с анимацией",
            "en": "Portfolio page with animation"
         },
         "Prostoi_primer_raboty_s_a": {
            "ru": "Простой пример работы с аниацией страницы портфолио Макет взят на просторах Instagram",
            "en": "A simple example of working with the an auction of the Portfolio, is taken on Instagram."
         },
         "Galereya_izobrajenii": {
            "ru": "Галерея изображений",
            "en": "Gallery of images"
         },
         "Testovoe_zadanie_na_doljn": {
            "ru": "Тестовое задание на должность Fullstack разработчик (PHP, React.js) в команду вебсайта для Эквид",
            "en": "Test task for the position of Fullstack Developer (PHP, React.js) in the team of the website for Equid"
         },
      },
      "html": {
         "<b>Osobennosti</b><br>Isp": {
            "ru": "<b>Особенности</b><br>Использовал clip-path<br><br><b>Ресурс</b><br><a href=\"https://www.instagram.com/p/CiMyE-LjDSE/?igshid=MDE2OWE1N2Q=\" _blank >@zhenya.ninja</a>",
            "en": "<b>Feature</b><br>Used clip-path<br><br><b>Source</b><br><a href=\"https://www.instagram.com/p/CiMyE-LjDSE/?igshid=MDE2OWE1N2Q=\" _blank>@zhenya.ninja</a>"
         },
         "<b>Osobennosti</b><br>Ele": {
            "ru": "<b>Особенности</b><br>Элементы (ингредиенты) добавялются автоматически из файла json.<br>Каждый из ингредиентов имеет свою стоимость, время приготовления, вес и количество калорий.<br><br><b>Ресурс</b><br><a href=\"https://frontend-skills.com/template/9mXx4YPAtxTtrGmAR1tO\" _blank>https://frontend-skills.com/</a>",
            "en": "<b>Feature</b><br>Elements (ingredients) are added automatically from the JSON file.<br>Each of the ingredients has its own cost, cooking time, weight and number of calories.<br><br><b>Source</b><br><a href=\"https://frontend-skills.com/template/9mXx4YPAtxTtrGmAR1tO\" _blank>https://frontend-skills.com/</a>"
         },
         "<b>Osobennosti</b><br>Dob": {
            "ru": "<b>Особенности</b><br>Добавлена мобильная версия, не предусмотренная макетом<br>Добавлена анимация (AOS)<br>Добавлен слайдер (a11y - slider)<br>Добавлена галерея изображений (собственная разработка)<br><br><b>Ресурс</b><br><a href=\"https://frontend-skills.com/template/0w50AZWvvEjOB26ACGiW\" _blank>https://frontend-skills.com/</a>",
            "en": "<b>Feature</b><br>Added a mobile version not provided for by the layout<br>Added animation (AOS)<br>Added slider (A11Y - Slider)<br>Added images gallery (own development)<br><br><b>Source</b><br><a href=\"https://frontend-skills.com/template/0w50AZWvvEjOB26ACGiW\" _blank>https://frontend-skills.com/</a>"
         },
         "<b>Osobennosti</b><br>Dly": {
            "ru": "<b>Особенности</b><br>Для анимации блоков был применен GSAP.",
            "en": "<b>Feature</b><br>GSAP was used for the animation of the blocks."
         },
         "Stoyala_zadacha_razrabota": {
            "ru": "Стояла задача разработать страницу с галереей, которая поддерживает добавление изображений по ссылка или из файла",
            "en": "The task was to develop a page with a gallery that supports adding images by link or from a file"
         },
      }
   }
   
   function readLang() {
      const langObj = {};

      const $head = document.querySelector("head")
      const $header = document.querySelector("header")
      const $main = document.querySelector("main")
      const $footer = document.querySelector("footer")

      const dataLangsArray = [];

      dataLangsArray['head'] =  $head.querySelectorAll("[data-lang]")
      dataLangsArray['header'] =  $header.querySelectorAll("[data-lang]")
      dataLangsArray['main'] =  $main.querySelectorAll("[data-lang]")
      dataLangsArray['footer'] =  $footer.querySelectorAll("[data-lang]")
      
      for (const key in dataLangsArray) {
         if (Object.hasOwnProperty.call(dataLangsArray, key)) {
            const $dataLangs = dataLangsArray[key];
            $dataLangs.forEach($dataLang => {
               let arrayValue;
               const dataType = ($dataLang.dataset.lang === '') ? 'text' : $dataLang.dataset.lang;
               switch (dataType) {
                  case 'text':
                     arrayValue = $dataLang.innerText;
                     break;
                  case 'content':
                     arrayValue = $dataLang.getAttribute('content')
                     break;
                  case 'aria':
                     arrayValue = $dataLang.getAttribute('aria-label')
                     break;
                  case 'alt':
                     arrayValue = $dataLang.getAttribute('alt')
                     break;
                  case 'title':
                     arrayValue = $dataLang.getAttribute('title')
                     break;
                  case 'html':
                     arrayValue = $dataLang.innerHTML
                     break;
                  default:
                     return;
                     break;
               }
               if (arrayValue) {
                  const arrayKey = makeIndexByInner(arrayValue);
                  langObj[key] = langObj[key] || {};
                  langObj[key][dataType] = langObj[key][dataType] || {};
                  langObj[key][dataType][arrayKey.slice(0,25)] = {ru:arrayValue}
               }
            });
            
         }
      }

      
      console.log(langObj);
   }

   function setLang(currentLang) {

      const $dataLangsEls = document.querySelectorAll("[data-lang]");
      $dataLangsEls.forEach($dataLangsEl => {
         const dataType = ($dataLangsEl.dataset.lang === '') ? 'text' : $dataLangsEl.dataset.lang;
         let content ;
         let arrayKey;
         switch (dataType) {
            case 'text':
               if (!$dataLangsEl.dataset.langId) {
                  arrayKey = makeIndexByInner($dataLangsEl.innerText).slice(0,25);
                  $dataLangsEl.setAttribute("data-lang-id", arrayKey);
               }
               else arrayKey = $dataLangsEl.dataset.langId
               content = findLangValue(dataType, arrayKey, currentLang)
               if (content) $dataLangsEl.innerText = content;
               break;
            case 'content':
               if (!$dataLangsEl.dataset.langId) {
                  arrayKey = makeIndexByInner($dataLangsEl.getAttribute('content')).slice(0,25)
                  $dataLangsEl.setAttribute("data-lang-id", arrayKey);
               }
               else arrayKey = $dataLangsEl.dataset.langId
               content = findLangValue(dataType, arrayKey, currentLang)
               if (content) $dataLangsEl.setAttribute('content', content)
               break;
            case 'aria':
               if (!$dataLangsEl.dataset.langId) {
                  arrayKey = makeIndexByInner($dataLangsEl.getAttribute('aria-label')).slice(0,25)
                  $dataLangsEl.setAttribute("data-lang-id", arrayKey);
               }
               else arrayKey = $dataLangsEl.dataset.langId
               
               content = findLangValue(dataType, arrayKey, currentLang)
               if (content) $dataLangsEl.setAttribute('aria-label', content)
               break;
            case 'alt':
               if (!$dataLangsEl.dataset.langId) {
                  arrayKey = makeIndexByInner($dataLangsEl.getAttribute('alt')).slice(0,25)
                  $dataLangsEl.setAttribute("data-lang-id", arrayKey);
               }
               else arrayKey = $dataLangsEl.dataset.langId
               
               content = findLangValue(dataType, arrayKey, currentLang)
               if (content) $dataLangsEl.setAttribute('alt', content)
               break;
            case 'title':
               if (!$dataLangsEl.dataset.langId) {
                  arrayKey = makeIndexByInner($dataLangsEl.getAttribute('title')).slice(0,25)
                  $dataLangsEl.setAttribute("data-lang-id", arrayKey);
               }
               else arrayKey = $dataLangsEl.dataset.langId

               content = findLangValue(dataType, arrayKey, currentLang)
               if (content) $dataLangsEl.setAttribute('title', content)
               break;
            case 'html':
               if (!$dataLangsEl.dataset.langId) {
                  arrayKey = makeIndexByInner($dataLangsEl.innerHTML).slice(0,25)
                  $dataLangsEl.setAttribute("data-lang-id", arrayKey);
               }
               else arrayKey = $dataLangsEl.dataset.langId
              
               content = findLangValue(dataType, arrayKey, currentLang)
               if (content) $dataLangsEl.innerHTML = content;
               break;
            default:
               return;
               break;
         }
      });

   }

   function findLangValue(type, nValue, currentLang) {
      // const langArray = [langObjHead]
      const langArray = [langObjHead, langObjHeader, langObjFooter, langObjIndex, langObjContacts, langObjPortfolio, langObjResume, langObjPortfolioWorks]

      let findContext = null
      langArray.forEach(lang => {
        if (lang[type] && lang[type][nValue] && lang[type][nValue][currentLang])
        findContext = lang[type][nValue][currentLang]
      });
     if (findContext) return findContext
     console.log(`Необходимо добавить перевод для ${currentLang} фразы - ${nValue} в блоке "${type}"`);
     return false
   }

   function makeIndexByInner(str) {
      let ru = {
         'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
         'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
         'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
         'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
         'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
         'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya',
         'ъ': 'ie', 'ь': '', 'й': 'i', ' ': '_',
      };
  
      return [...str].map(l => {
         if (ru[l.toLocaleLowerCase()] === undefined) return l;
         let latL = ru[l.toLocaleLowerCase()];
         
         if (l !== l.toLocaleLowerCase()) {
            latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);
         } else if (latL === undefined) {
            latL = l;
         }
         
         return latL;
      }).join('');
   }

   
   // ------------------------------------------------------

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
   const $btnSendMail = document.querySelector('#btnSendMail')
   const $form  = document.querySelector("#form")
   const sendMail = (e) => {
      const $inputName = $form.querySelector('[name="name"]');
      const $inputEmail = $form.querySelector('[name="email"]');
      const $inputMsg = $form.querySelector('[name="message"]');

      const emailParams = {
         from_name: $inputName.value,
         reply_to: $inputEmail.value,
         message: $inputMsg.value
      };

      e.preventDefault()
      
      if (FormValid.checkValid($form)) {

         $btnSendMail.classList.add("msg--sending")
         $btnSendMail.setAttribute("disabled", "")
         const removeDone = ()=> {
            $btnSendMail.classList.remove("msg")
            document.querySelector(".msg--done").removeEventListener("animationend", removeDone)
            $btnSendMail.classList.remove("msg--done")
         }

         // // таймаут для "отправки"
         // setTimeout(() => {
         //    $btnSendMail.classList.remove("msg--sending")
         //    $btnSendMail.removeAttribute("disabled")
         //    $btnSendMail.classList.add("msg")
         //    $btnSendMail.classList.add("msg--send")
         //    $btnSendMail.setAttribute("data-type", "ok")
         // }, 2000)

        

         emailjs.send('service_aq7mfsb', 'template_sty9rtw', emailParams)
            .then(function(response) {
               $btnSendMail.classList.remove("msg--sending")
               $btnSendMail.removeAttribute("disabled")
               $btnSendMail.classList.add("msg")
               $btnSendMail.classList.add("msg--send")
               $btnSendMail.setAttribute("data-type", "ok")
            }, function(error) {
               $btnSendMail.classList.remove("msg--sending")
               $btnSendMail.removeAttribute("disabled")
               $btnSendMail.classList.add("msg")
               $btnSendMail.classList.add("msg--send")
               $btnSendMail.setAttribute("data-type", "error")
               console.log('failed send email: ', error);
            });
          // таймаут по которому показываем иконку
         setTimeout(() => {
            
            $btnSendMail.classList.remove("msg--send")
            $btnSendMail.removeAttribute("data-type")
            $btnSendMail.classList.add("msg--done")

            document.querySelector(".msg--done").addEventListener("animationend", removeDone)
            $form.reset();
         }, 3000)

      }
   }

    if ($btnSendMail) {
      
      if (typeof emailjs !== 'undefined') emailjs.init("2WyxNkrXZ5yfWQ-uh")
      $btnSendMail.addEventListener("click", (e)=> sendMail(e))
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

            portfolioName.setAttribute("data-lang", "");
            portfolioContent.setAttribute("data-lang", "");
            portfolioMoreInfo.setAttribute("data-lang", "html");
               
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
            let monthNames;
            if (currentLang === 'en')
            monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ]
            else monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
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
      // костыль для firefox (не загружает перевод сам)
      if (currentLang !== 'ru') setTimeout(() => {
         setLang(currentLang)
      }, 1);
         
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
         if (currentLang !== 'ru') setLang(currentLang)
      }
      // ------------------------------------------------------
      
   }

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