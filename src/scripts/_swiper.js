// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const shoresLong = ["North Shore", "South Shore", "West Shore", "East Shore"];
const shoresShort = ["North", "South", "West", "East"];
const shoresText =  window.innerWidth >= 650 ? shoresLong : shoresShort;

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
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: ["-120%", 0, -500],
  //   },
  //   next: {
  //     shadow: true,
  //     translate: ["120%", 0, -500],
  //   },
  // },

  // fadeEffect: {
  //   crossFade: true,
  // },

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




// headerSlider.on("breakpoint", function (swiper, breakpointParams) {
//   const bullets = document.querySelectorAll(".swiper-pagination-bullet");
//   bullets.forEach((bullet, index) => {
//     const shoreText =
//       window.innerWidth >= 650 ? shoresLong[index] : shoresShort[index];
//      bullet.innerHTML = `
//          <span class="${className}" data-index="${index}">
//          <span class="header__pagination-number">0${index + 1}</span>
//          <span class="header__pagination-shore">${shoreText[index]}</span>
//          </span>
//         `;
//   });
//});

// headerSlider.init();

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
