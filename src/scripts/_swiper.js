// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const shores = ["North Shore", "South Shore", "West Shore", "East Shore"];

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

  pagination: {
    el: ".header__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
      <span class="${className}" data-index="${index}">
      <span class="header__pagination-number">0${index + 1}</span>
      <span class="header__pagination-shore">${shores[index]}</span>
      </span>
    `;
    },
  },

  navigation: {
    nextEl: ".header__slider-next",
    prevEl: ".header__slider-prev",
  },

  //   // And if we need scrollbar
  //   //   scrollbar: {
  //   //     el: '.swiper-scrollbar',
  //   //   },
});


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
