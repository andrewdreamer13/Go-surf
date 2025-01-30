import Swiper from "swiper/bundle";
import { hotels } from "./data.js";

const sleepSlider = new Swiper(".sleep__slider", {
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
    nextEl: ".sleep__slider-next",
    prevEl: ".sleep__slider-prev",
  },
});

const ratings = document.querySelectorAll(".sleep__slider-rating-active");
const ratingTextOuters = document.querySelectorAll(".sleep__slider-rating-inner .sleep__slider-title span");

const resortHotel = document.querySelector("#hotel");
const state = document.querySelector("#state");
const priceForNight = document.querySelector("#price-night");
const minusNight = document.querySelector("#night-minus");
const plusNight = document.querySelector("#night-plus");
const minusGuest = document.querySelector("#guest-minus");
const plusGuest = document.querySelector("#guest-plus");
const nightCountOuter = document.querySelector("#night-count");
const guestCountOuter = document.querySelector("#guest-count");
const totalPriceOuter = document.querySelector("#price-total");

let nightCount = 1;
let guestCount = 1;
let currentPrice = parseFloat(
  priceForNight.textContent.replace(/[^0-9.]/g, "")
);

sleepSlider.on("slideChange", () => {
  const currentIndex = sleepSlider.realIndex;
  hotels.forEach((hotel) => {
    if (hotel.id == currentIndex) {
      resortHotel.textContent = `${hotel.hotel}`;
      state.textContent = `${hotel.country}`;
      priceForNight.textContent = `$${hotel.price} usd`;
      currentPrice = parseFloat(
        priceForNight.textContent.replace(/[^0-9.]/g, "")
      );
      ratings.forEach((rating) => {
        const activeRatingWidth = hotel.rating / 0.05;
        rating.style.width = `${activeRatingWidth}%`;
        console.log(activeRatingWidth);
        ratingTextOuters.forEach((outer) => {
          if(activeRatingWidth == 100) {
            outer.textContent = 'excellent';
          }
          if(activeRatingWidth < 100 && activeRatingWidth >= 80) {
            outer.textContent = 'very good';
          }
          if(activeRatingWidth < 80 && activeRatingWidth > 64) {
            outer.textContent = 'good';
          }
        })
        
      });
      updateTotalPrice();
    }
  });
});

function updateTotalPrice() {
  const totalPrice = nightCount * guestCount * currentPrice;
  totalPriceOuter.textContent = `$${totalPrice} usd`;
}
updateTotalPrice();

plusNight.addEventListener("click", () => {
  nightCount++;
  nightCountOuter.textContent = `${nightCount} nights`;
  updateTotalPrice();
});

minusNight.addEventListener("click", () => {
  nightCount--;
  if (nightCount <= 1) {
    nightCount = 1;
    nightCountOuter.textContent = `${nightCount} night`;
  } else {
    nightCountOuter.textContent = `${nightCount} nights`;
  }
  updateTotalPrice();
});

plusGuest.addEventListener("click", () => {
  guestCount++;
  guestCountOuter.textContent = `${guestCount} guests`;
  updateTotalPrice();
});

minusGuest.addEventListener("click", () => {
  guestCount--;
  if (guestCount <= 1) {
    guestCount = 1;
    guestCountOuter.textContent = `${guestCount} guest`;
  } else {
    guestCountOuter.textContent = `${guestCount} guests`;
  }

  updateTotalPrice();
});
