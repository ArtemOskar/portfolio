// -----------------------SLIDER MAIN-BLOCK-----------------------
const swiperThumbs = new Swiper('.slider-main-thumbs', {
   slidesPerView: 6,
   freeMode: true,
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
})
const swiperMainBlock = new Swiper('.slider-main-presentation', {
   grabCursor: true,
   effect: "creative",
   creativeEffect: {
      prev: {
         shadow: true,
         translate: [0, 0, -400],
      },
      next: {
         translate: ["100%", 0, 0],
      },
   },
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 20,
   initialSlide: 0,
   speed: 1000,
   loop: true,
   loopedSlides: 0,
   autoplay: {
      delay: 7000,
      disableOnInteraction: false
   },
   thumbs: {
      swiper: swiperThumbs
   }
})
// ---------------------------------------------------------------


// -----------------------SLIDER PRESENTAITION--------------------
const swiperPresentaitionTablet = new Swiper('.presentation-tablet-slider', {
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 0,
   initialSlide: 0,
   speed: 700,
   loop: true,
   loopedSlides: 0,
   autoplay: {
      delay: 6000,
      disableOnInteraction: false
   },
})
const swiperPresentaitionLaptoop = new Swiper('.presentation-laptoop-slider', {
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 0,
   initialSlide: 0,
   speed: 700,
   loop: true,
   loopedSlides: 0,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false
   },
   rtl: true
})
// ---------------------------------------------------------------


// -----------------------SLIDER TESTIMONIALS---------------------
const swiperTestimonials = new Swiper('.testimonials-slider', {
   navigation: {
         nextEl: '.testimonials-btn-next',
         prevEl: '.testimonials-btn-prev'
   },
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 20,
   initialSlide: 0,
   speed: 700,
   loop: true,
   loopedSlides: 0,
   autoplay: {
      delay: 7000,
      disableOnInteraction: false
   },   
})
// ------------------------------------------------------------


// -----------------------SLIDER EXPLORE-----------------------
const swiperExploreThumbs = new Swiper('.explore-slider-thumb', {
   slidesPerView: 5,
   freeMode: true,
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
})
const swiperExplore = new Swiper('.explore-slider', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      initialSlide: 0,
      speed: 1000,
      loop: true,
      autoHeight: true,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      simulateTouch: false,
       thumbs: {
         swiper: swiperExploreThumbs
      }
})
// ---------------------------------------------------------------


// -----------------------SLIDER ANALYZE-----------------------
const swiperAnalyze = new Swiper('.analyze-slider', {
   effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      autoplay: {
         delay: 7000,
         disableOnInteraction: false
      },
      navigation: {
         nextEl: '.analyze-btn-next',
         prevEl: '.analyze-btn-prev'
   },
})
// ------------------------------------------------------------
