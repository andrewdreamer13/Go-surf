import Swiper from "swiper/bundle";
window.scrollTo(0, 3500)
const travelSlider = new Swiper(".travel__slider", {
  spaceBetween: 0,
  // loop: true,
  slidesPerView: 1,
  // slideActiveClass: 2,
  //
  initialSlide: 0,
  effect: "fade",
  // slideToClickedSlide: true,
  centeredSlides: true,
  // parallax: true,
  speed: 700,

  // pagination: {
  //   el: ".header__pagination",
  //   clickable: true,
  // },

  navigation: {
    nextEl: ".travel__slider-next",
    prevEl: ".travel__slider-prev",
  },
});