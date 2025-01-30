import Swiper from "swiper/bundle";
// import { hotels } from "./data.js";

const shopSlider = new Swiper(".shop__slider", {
  spaceBetween: 0,
  // loop: true,
  slidesPerView: 1,
  // slideActiveClass: 2,
  //
  initialSlide: 5,
  // effect: "fade",
   //effect: "cards",
  // grabCursor: true,
  slideToClickedSlide: true,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  centeredSlides: true,
  // parallax: true,
  speed: 700,

  // pagination: {
  //   el: ".header__pagination",
  //   clickable: true,
  // },

  navigation: {
    nextEl: ".shop__slider-next",
    prevEl: ".shop__slider-prev",
  },
})

window.scrollTo(0, 6600)
console.log('hello');
