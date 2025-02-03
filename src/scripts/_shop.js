import Swiper from "swiper/bundle";
import { surfs } from "./data.js";

const shopSlider = new Swiper(".shop__slider", {
  spaceBetween: 0,
  // loop: true,
  slidesPerView: 1,
  // slideActiveClass: 2,
  //
  // initialSlide: 5,
  // effect: "fade",
  //effect: "cards",
  // grabCursor: true,
  slideToClickedSlide: true,
  // grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      // shadow: true,
      // translate: ["-120%", 0, -500],
      opacity: 0,
      scale: 0
    },
    next: {
      // shadow: true,
      // translate: ["120%", 0, -500],
      opacity: 0,
      scale: 0
    },
  },
  centeredSlides: true,
  // parallax: true,
  speed: 700,

  navigation: {
    nextEl: ".shop__slider-next",
    prevEl: ".shop__slider-prev",
  },
});

window.scrollTo(0, 6600);

const shopModel = document.querySelector("#shop-model");
const shopRating = document.querySelector("#shop-rating");
const shopPrice = document.querySelector("#shop-price");

shopSlider.on("slideChange", () => {
  const currentIndex = shopSlider.realIndex;
  console.log(currentIndex);

  surfs.forEach((surf) => {
    if (surf.id == currentIndex) {
      shopModel.textContent = `${surf.model}`;
      shopPrice.innerHTML = `$${surf.price}<sup>99</sup>`;
      const activeRatingWidth = surf.rating / 0.05;
      shopRating.style.width = `${activeRatingWidth}%`;
      console.log(activeRatingWidth);
    }
  });
});
