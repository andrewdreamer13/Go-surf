// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';



// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 30,
   loop: true,
  slidesPerView:2,
  slidesPerGroup: 1,
  slideToClickedSlide: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});