window.addEventListener("load", pageLoaded);
function pageLoaded(p) {
   document.documentElement.classList.add('loaded');
}


// menu-burger
const iconMenu = document.querySelector('.header__burger');
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
   const menuLink = e.target;
   if (iconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBurger.classList.remove('_active');
   }
}

// observer
document.querySelectorAll('.list-privileges__item').forEach((e) => {
   const options = {
      threshold: [0.5]
   }
   function callback(entries, observer) {
      entries.forEach(entry => {
         const { target, isIntersecting, intersectionRatio } = entry;
         if (isIntersecting) {
            target.classList.add('animation');
         }
      });
   }
   const observer = new IntersectionObserver(callback, options);
   observer.observe(e);
});

// slider-swiper
if (document.querySelector('.testimonials__slider')) {
   new Swiper('.slider__body', {
      navigation: {
         nextEl: '.slider__button-next',
         prevEl: '.slider__button-prev'
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 20,
      initialSlide: 0,
   });
}

// Стилизация шкалы рейтинга
document.querySelectorAll('.stars-rating__progress-input').forEach((child) => {
   let min = +child.min,
      max = +child.max - min,
      value = +child.value - min,
      c = 0;
   const result = (value / max * 100);
   if (result < 0) {
      c = 0;
   } else {
      c = `${result}`;
   }
   child.style.background = `linear-gradient(to right, #52503B 0%, #52503B ${c}%, #FFFFFF ${c}%, #FFFFFF 100%)`;
});

// intl-tel-input
var input = document.querySelector("#phone");
window.intlTelInput(input, {
   // any initialisation options go here
   initialCountry: "SK",
   preferredCountries: ['UA', 'SK', 'PL']
});


window.addEventListener('resize', () => {
   // Размещение картинки блока .full-screen (mobile, Pc переход)
   const viewportWidth = window.screen.width;
   const fullScreenContainer = document.querySelector('.full-screen');
   const fullScreenImg = document.querySelector('.full-screen__img');
   const fullScreenMobiliWindow = document.querySelector('.full-screen__window');
   if (viewportWidth < 767.98) {
      fullScreenMobiliWindow.insertAdjacentElement('afterbegin', fullScreenImg);
   } else {
      fullScreenContainer.insertAdjacentElement('afterbegin', fullScreenImg);
   }
});