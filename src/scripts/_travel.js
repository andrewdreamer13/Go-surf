import Swiper from "swiper/bundle";

const travelSlider = new Swiper(".travel__slider", {
  spaceBetween: 0,
  loop: true,
  slidesPerView: 1,
  // slideActiveClass: 2,
  //
  initialSlide: 6,
  // slideToClickedSlide: true,
  centeredSlides: true,
  // parallax: true,
  speed: 700,

  // pagination: {
  //   el: ".header__pagination",
  //   clickable: true,
  // },

  navigation: {
    nextEl: ".surf__slider-next",
    prevEl: ".surf__slider-prev",
  },
});