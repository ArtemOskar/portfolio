const viewportWidth = window.screen.width;
document.addEventListener('click', clickAction);
window.addEventListener("load", pageLoaded);

// Перемещение блоков при адаптиве
// const registrationList = document.querySelector('.registration-list');
const burgerMenuList = document.querySelector('.burger-menu__list');
const headerMenuList = document.querySelector('.registration-list');
const headerLoginItem = document.querySelector('.login-item');
const headerSingUpItem = document.querySelector('.sing-up-item');

if (viewportWidth < 768) {
   burgerMenuList.insertAdjacentElement('beforeend', headerLoginItem);
   burgerMenuList.insertAdjacentElement('beforeend', headerSingUpItem);
} else {
   headerMenuList.insertAdjacentElement('afterbegin', headerSingUpItem);
   headerMenuList.insertAdjacentElement('afterbegin', headerLoginItem);
}


window.addEventListener('resize', () => {
   const viewport = window.screen.width;
   if (viewport >= 768 && viewport < 1920) {
      iconMenu.classList.add('_active');
      menuBurger.classList.add('_active');
   }

   if (viewport >= 1920) {
      menuBurger.classList.add('open');
   } else {
      menuBurger.classList.remove('open');
   }

   if (viewport < 768) {
      burgerMenuList.insertAdjacentElement('beforeend', headerLoginItem);
      burgerMenuList.insertAdjacentElement('beforeend', headerSingUpItem);
   } else {
      headerMenuList.insertAdjacentElement('afterbegin', headerSingUpItem);
      headerMenuList.insertAdjacentElement('afterbegin', headerLoginItem);
   }


});

function pageLoaded(p) {
   document.documentElement.classList.add('loaded');
   if (viewportWidth >= 768 && viewportWidth < 1920) {
      iconMenu.classList.add('_active');
      menuBurger.classList.add('_active');
   }
   if (viewportWidth >= 1920) {
      menuBurger.classList.add('open');
   }
}

// slider-swiper
if (document.querySelector('.home__slider')) {
   new Swiper('.slider__body', {
      // Кнопки навигации слайдера
      navigation: {
         nextEl: '.slider__button-next',
         prevEl: '.slider__button-prev'
      },

      // Количество пролистываемых слайдов за один раз
      slidesPerView: 'auto',

      // Количество слайдов для одновременного показа
      slidesPerGroup: 1,

      // Отступ между слайдами
      // spaceBetween: 20,

      // Номер стартового слайда для показа
      initialSlide: 1,

      // Скорость смены слайда
      speed: 2000,

      // Бесконечный слайдер
      loop: true,

      // Автовысота
      // autoHeight: true,

      // Количество дублирующих слайдов
      // loopedSlides: 0,

      // Стиль смены слайда
      effect: 'fade',
      fadeEffect: {
         // Параллельная смена прозрачности слайдов
         crossFade: true
      },

      // Свободный режим
      // freeMode: true,

      // Переключение при клике на слайд
      // slideToClickedSlide: true,

      // Включение/отключение свайпа курсором на PC
      simulateTouch: false,
      // Чувствительность свайпа
      // touchRatio: 1,
      // Курсор перетаскивания
      // grabCursor: true,

      // Автопрокрутка
      autoplay: {
         // Пауза между прокруткой
         delay: 8000,
         // Закончить на последнем слайде
         // stopOnLastSlide: true,
         // Отключить после ручного переключения
         disableOnInteraction: false
      },

      // Стиль смены слайда
      // effect: 'flip',
      // flipEffect: {
      //    // Тень
      //    slideShadows: true,

      // Показ только активного слайда
      //    limitRotation: true
      // },

      // Стиль смены слайда
      // effect: 'cube',
      // cubeEffect: {
      //    // Настройки тени
      //    slideShadows: true,
      //    shadow: true,
      //    shadowOffset: 20,
      //    shadowScale: 0.94
      // },

      // Управление колесом мыши
      // mousewheel: {
      //    // Чувствительность колеса мыши
      //    sensitivity: 1,
      //    // Класс объекта на котором будет срабатывать прокрутка мышью
      //    eventsTarget: ".img-slider"
      // },

      // Управление клавиатурой
      keyboard: {
         // Выключить/включить
         enabled: true,
         // Выключить/включить только когда слайдер в пределах вьюпорта
         onlyInViewport: true,
         // Выключить/включить управление клавишами pageUp, pageDown
         pageUpDown: true
      },

      // Буллеты,фракция,прогрессбар
      pagination: {
         // Буллеты
         type: 'bullets',
         // Объект с булетами, добавляем класс к объекту в HTML
         el: '.swiper-pagination', //Стилтзация CSS .swiper-pagination

         // Активные булеты, можно кликать для переключения слайдов
         clickable: true, //Стилтзация CSS .swiper-pagination-bullet

         // Динамические буллетыы
         // dynamicBullets: true,


         // Фпакция
         // type: 'fraction',

         // Прогрессбар
         // type: 'progressbar'//Стилтзация CSS .swiper-pagination-progressbar-fill

      },

   });
}

window.addEventListener('scroll', function (e) {
   const scrollY = window.scrollY;
   onMenuLinkCkick(scrollY);
   addRemoveClass(scrollY);
});


// menu-burger
const iconMenu = document.querySelector('.burger-menu__burger');
const menuBurger = document.querySelector('.burger-menu');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBurger.classList.toggle('_active');
   });
}

const menuLinks = document.querySelectorAll('.burger-menu__link');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkCkick);
   });
}

function onMenuLinkCkick(e) {
   if (iconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBurger.classList.remove('_active');
   }

   if (scrollY > 10) {
      iconMenu.classList.remove('_active');
      menuBurger.classList.remove('_active');
   }
}

const headerBackground = document.querySelector('.header__background');
function addRemoveClass() {
   if (scrollY > 20) {
      headerBackground.classList.add('_active');
   } else {
      headerBackground.classList.remove('_active');
   }
}

if (viewportWidth >= 768 && viewportWidth < 1920) {
   iconMenu.classList.add('_active');
   menuBurger.classList.add('_active');
}


// tabs-schop
const productsList = document.querySelector('.category-products__list');
const activeCategory = document.querySelector('.category-products__active-category');
const singleSofaCategory = document.querySelector('#single-sofa');
const livingRoomCategory = document.querySelector('#living-room');
const kitchenCategory = document.querySelector('#kitchen');
const bedRoomCategory = document.querySelector('#bed-room');
const bathRoomCategory = document.querySelector('#bath-room');
const decorationsCategory = document.querySelector('#decorations');
const ceramicsCategory = document.querySelector('#ceramics');

function removeClass() {
   document.querySelectorAll('.products__body').forEach(category => {
      if (category.classList.contains('open-category')) {
         category.classList.remove('open-category');
      }
   });
   document.querySelectorAll('.category-products__button').forEach(buttonCategory => {
      if (buttonCategory.classList.contains('open-category')) {
         buttonCategory.classList.remove('open-category');
      }
   });
}

function clickAction(event) {
   const targetClick = event.target;
   // tabs-schop
   if (targetClick.closest('.category-products__active-category')) {
      productsList.classList.toggle('open-list');
      activeCategory.classList.toggle('open-list');
      event.preventDefault();
   }
   if (targetClick.closest('.category-products__button')) {
      activeCategory.innerText = targetClick.innerText;
      productsList.classList.remove('open-list');
      activeCategory.classList.remove('open-list');
   }
   if (targetClick.closest('.single-sofa-category')) {
      removeClass();
      targetClick.classList.add('open-category');
      singleSofaCategory.classList.add('open-category');
   }
   if (targetClick.closest('.living-room-category')) {
      removeClass();
      targetClick.classList.add('open-category');
      livingRoomCategory.classList.add('open-category');
   }
   if (targetClick.closest('.kitchen-category')) {
      removeClass();
      targetClick.classList.add('open-category');
      kitchenCategory.classList.add('open-category');
   }
   if (targetClick.closest('.bed-room-category')) {
      removeClass();
      targetClick.classList.add('open-category');
      bedRoomCategory.classList.add('open-category');
   }
   if (targetClick.closest('.bath-room-category')) {
      removeClass();
      targetClick.classList.add('open-category');
      bathRoomCategory.classList.add('open-category');
   }
   if (targetClick.closest('.decorations-category')) {
      removeClass();
      targetClick.classList.add('open-category');
      decorationsCategory.classList.add('open-category');
   }
   if (targetClick.closest('.ceramics-category')) {
      removeClass();
      targetClick.classList.add('open-category');
      ceramicsCategory.classList.add('open-category');
   }
   // scrool
   if (targetClick.closest('.link-home')) {
      onMenuLinkCkick();
      scroll(blockHome);
      event.preventDefault();
   } if (targetClick.closest('.link-shop')) {
      onMenuLinkCkick();
      scroll(blockProducts);
      event.preventDefault();
   } if (targetClick.closest('.link-gallery')) {
      onMenuLinkCkick();
      scroll(blockGallery);
      event.preventDefault();
   } if (targetClick.closest('.link-location')) {
      onMenuLinkCkick();
      scroll(blockLocation);
      event.preventDefault();
   }
}

// Высота шапки
const headerHeight = document.querySelector('.header').offsetHeight;

// scrool
const blockHome = document.querySelector('.header');
const blockProducts = document.querySelector('.products');
const blockGallery = document.querySelector('.gallery');
const blockLocation = document.querySelector('.footer');
function scroll(e) {
   window.scrollTo({
      left: 0,
      top: e.offsetTop - headerHeight,
      behavior: 'smooth'
   })
}

//stars-rating 
document.querySelectorAll('.product-card__iput').forEach((element) => {
   let min = +element.min,
      max = +element.max - min,
      value = +element.value - min,
      c = 0;
   const result = (value / max * 100);
   if (result < 0) {
      c = 0;
   } else {
      c = `${result}`;
   }
   element.style.background = `linear-gradient(to right, #F3B705 0%, #F3B705 ${c}%, #F3F3F3 ${c}%, #F3F3F3 100%)`;
});
