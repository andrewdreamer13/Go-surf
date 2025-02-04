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
      scale: 0,
    },
    next: {
      // shadow: true,
      // translate: ["120%", 0, -500],
      opacity: 0,
      scale: 0,
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


const shopModel = document.querySelector("#shop-model");
const shopRating = document.querySelector("#shop-rating");
const shopPrice = document.querySelector("#shop-price");

const shopCards = document.querySelectorAll(".shop__card");
const frontBtn = document.querySelector("#front-btn");
const backBtn = document.querySelector("#back-btn");

let currentIndex;

shopSlider.on("slideChange", () => {
  currentIndex = shopSlider.realIndex;

  surfs.forEach((surf) => {
    if (surf.id == currentIndex) {
      shopModel.textContent = `${surf.model}`;
      shopPrice.innerHTML = `$${surf.price}<sup>99</sup>`;
      const activeRatingWidth = surf.rating / 0.05;
      shopRating.style.width = `${activeRatingWidth}%`;
    }
  });

  updateBtnsState();

  frontBtn.addEventListener("click", function () {
    shopCards[currentIndex].classList.remove("shop__card-rotated");
    this.classList.add("shop__card-btn-active");
    backBtn.classList.remove("shop__card-btn-active");
  });

  backBtn.addEventListener("click", function () {
    shopCards[currentIndex].classList.add("shop__card-rotated");
    this.classList.add("shop__card-btn-active");
    frontBtn.classList.remove("shop__card-btn-active");
  });
});

frontBtn.addEventListener("click", function () {
  shopCards[0].classList.remove("shop__card-rotated");
  this.classList.add("shop__card-btn-active");
  backBtn.classList.remove("shop__card-btn-active");
});

backBtn.addEventListener("click", function () {
  shopCards[0].classList.add("shop__card-rotated");
  this.classList.add("shop__card-btn-active");
  frontBtn.classList.remove("shop__card-btn-active");
});

function updateBtnsState() {
  if (shopCards[currentIndex].classList.contains("shop__card-rotated")) {
    backBtn.classList.add("shop__card-btn-active");
    frontBtn.classList.remove("shop__card-btn-active");
  } else {
    backBtn.classList.remove("shop__card-btn-active");
    frontBtn.classList.add("shop__card-btn-active");
  }
}

const shopInner = document.querySelector('.shop__inner');
const shopDots = document.querySelectorAll('.shop__card-dot');
const tooltip = document.getElementById('dot-tooltip');
const tooltipText = document.getElementById('dot-info');

shopDots.forEach((dot) => {
  dot.addEventListener('click', function (event) {
    event.stopPropagation();
    shopDots.forEach((dot) => {
      dot.classList.remove('shop__card-dot-active')
    })
    dot.classList.add('shop__card-dot-active')
    tooltip.style.display = 'flex';
    tooltipText.textContent = dot.getAttribute('data-dot');

    const dotRect = this.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const shopInnerRect = shopInner.getBoundingClientRect();
    
    tooltip.style.top = `${dotRect.top - shopInnerRect.top - tooltipRect.height / 2 + 10}px`;
    tooltip.style.left = `${dotRect.right + 5 }px`;

    if (tooltipRect.left < 0) {
      tooltip.style.left = '10px';
    } else if (tooltipRect.right > window.innerWidth) {
      tooltip.style.left = `${window.innerWidth - tooltipRect.width - 10}px`;
    }
  })
})

document.addEventListener('click', function(event) {
  if (!event.target.classList.contains('shop__card-dot')) {
    shopDots.forEach((dot) => {
      dot.classList.remove('shop__card-dot-active')
    })

   
    tooltip.style.display = 'none';
  }
});