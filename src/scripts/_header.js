import Swiper from "swiper/bundle";

const shoresLong = ["North Shore", "South Shore", "West Shore", "East Shore"];
const shoresShort = ["North", "South", "West", "East"];
const shoresText = window.innerWidth >= 650 ? shoresLong : shoresShort;

const headerSlider = new Swiper(".header__slider", {
  direction: "horizontal",
  spaceBetween: 0,
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slideToClickedSlide: true,
  centeredSlides: true,
  parallax: true,
  speed: 1000,
  effect: "fade",

  pagination: {
    el: ".header__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
      <span class="${className}" data-index="${index}">
      <span class="header__pagination-number">0${index + 1}</span>
      <span class="header__pagination-shore">${shoresText[index]}</span>
      </span>
    `;
    },
  },

  navigation: {
    nextEl: ".header__slider-next",
    prevEl: ".header__slider-prev",
  },
});

const mapNorth = document.querySelector(".map-north");

window.addEventListener("load", () => {
  mapNorth.classList.add("map-visible");
});

// headerSlider.on("paginationRender", function () {
//   const mapRoads = document.querySelectorAll(".road");
//   const bullets = document.querySelectorAll(".swiper-pagination-bullet");
//   bullets.forEach((bullet) => {
//     bullet.addEventListener("click", function (event) {
//       const bulletIndex = event.currentTarget.getAttribute("data-index");
//       mapRoads.forEach((road, index) => {
//         if (index == bulletIndex) {
//           // road.classList.add('road-active')

//           //  // customFunction(road);
//         }
//       });
//       console.log(`Bullet ${bulletIndex} clicked!`);
//     });
//   });
// });

// header burger menu
burger();

function burger() {
  const burgerBtn = document.querySelector(".burger");
  const menu = document.querySelector(".header__aside");
  const navItems = document.querySelectorAll(".nav__item");
  const navLinks = document.querySelectorAll(".nav__link");

  //open menu

  burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("un-translate");
    burgerBtn.classList.toggle("burger-active");
    document
      .querySelector(".burger__span-one")
      .classList.toggle("span-one-transform");
    document
      .querySelector(".burger__span-two")
      .classList.toggle("span-two-transform");
    document
      .querySelector(".burger__span-three")
      .classList.toggle("span-three-transform");
    document.body.classList.toggle("no-scroll");
    navItems.forEach((item) => {
      item.classList.toggle("nav__item--animate");
    });
  });

  /* close menu */

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navItems.forEach((item) => {
        item.classList.remove("nav__item--animate");
      });
      menu.classList.remove("un-translate");
      burgerBtn.classList.remove("burger-active");
      document
        .querySelector(".burger__span-one")
        .classList.remove("span-one-transform");
      document
        .querySelector(".burger__span-two")
        .classList.remove("span-two-transform");
      document
        .querySelector(".burger__span-three")
        .classList.remove("span-three-transform");
      document.querySelector("body").classList.remove("no-scroll");
    });
  });
} // End of burger
