window.addEventListener("load", pageLoaded);
function pageLoaded(p) {
   document.documentElement.classList.add('loaded');
}
document.addEventListener('click', clickAction);

// scrool
const blockHome = document.querySelector('.fullscreen');
const blockDescription = document.querySelector('.description');
const blockGallery = document.querySelector('.gallery');
const blockTestimonials = document.querySelector('.testimonials');
const blockContact = document.querySelector('.contact');

function clickAction(event) {
   const targetClick = event.target;
   if (targetClick.closest('.link-home')) {
      onMenuLinkCkick();
      scroll(blockHome);
      event.preventDefault();
   } if (targetClick.closest('.link-about')) {
      onMenuLinkCkick();
      scroll(blockDescription);
      event.preventDefault();
   } if (targetClick.closest('.link-gallery')) {
      onMenuLinkCkick();
      scroll(blockGallery);
      event.preventDefault();
   } if (targetClick.closest('.link-testimonials')) {
      onMenuLinkCkick();
      scroll(blockTestimonials);
      event.preventDefault();
   } if (targetClick.closest('.link-contacts')) {
      onMenuLinkCkick();
      scroll(blockContact);
      event.preventDefault();
   }
}

const headerHeight = document.querySelector('.menu-background').offsetHeight;

function scroll(e) {
   window.scrollTo({
      left: 0,
      top: e.offsetTop - headerHeight,
      behavior: 'smooth'
   })
}

// menu-burger
const iconMenu = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.header__menu');
const menuItems = document.querySelectorAll('.menu-header__item');
const menuLink = document.querySelectorAll('.menu-header__link');
const menuPhone = document.querySelector('.menu-header__phone');
const menuLabelPhone = document.querySelector('.menu-header__label-phone');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBurger.classList.toggle('_active');
      menuPhone.classList.toggle('animeite');
      menuLabelPhone.classList.toggle('animeite');
      menuItems.forEach(link => {
         link.classList.toggle('animeite');
      });
   });
}

function onMenuLinkCkick(e) {
   if (iconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBurger.classList.remove('_active');
   }
   menuItems.forEach(link => {
      if (link.classList.contains('animeite')) {
         link.classList.remove('animeite');
      } if (menuPhone.classList.contains('animeite')) {
         menuPhone.classList.remove('animeite');
      } if (menuLabelPhone.classList.contains('animeite')) {
         menuLabelPhone.classList.remove('animeite');
      }
   });
}

// observer
document.querySelectorAll('.category__images').forEach((e) => {
   const options = {
      threshold: [0.5]
   }
   function callback(entries, observer) {
      entries.forEach(entry => {
         const { target, isIntersecting } = entry;
         if (isIntersecting) {
            target.classList.add('animation');
         }
      });
   }
   const observer = new IntersectionObserver(callback, options);
   observer.observe(e);
});