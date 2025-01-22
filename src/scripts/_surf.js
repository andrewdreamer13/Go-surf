import { beaches } from "./data.js";
import Swiper from "swiper/bundle";

const surfSlider = new Swiper(".surf__slider", {
  spaceBetween: 0,
  loop: true,
  slidesPerView: 'auto',
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

const map = document.querySelector(".surf__map-svg-track");
const dots = document.querySelectorAll(".surf__map .surf__map-dot");
const weatherPopup = document.createElement("div");
weatherPopup.classList.add("weather-forcast");

function getStartPopupPosition() {
  weatherPopup.innerHTML = `

  <div class="weather-forcast__names">
        <div class="weather-forcast__names-box">
          <h4 class="weather-forcast__shore">joaquina beach</h4>
          <h5 class="weather-forcast__country">brazil</h5>
        </div>
        <a class="weather-forcast__link" href="#!">
           <svg class="weather-forcast__svg" width="17" height="14">
            <use xlink:href="img/svg/sprite.svg#weather-arrow"></use>
           </svg>
        </a>
      </div>

      <div class="weather-forcast__data">
        <div class="weather-forcast__item">
            <svg class="weather-forcast__item-svg" width="40" height="25">
              <use xlink:href="img/svg/sprite.svg#surf"></use>
            </svg>
          <div class="weather-forcast__item-numbers">9 - 13</div>
          <div class="weather-forcast__item-names">Surf (FT)</div>
        </div>
        <div class="weather-forcast__item">
          <svg class="weather-forcast__item-svg"  width="19" height="25">
            <use xlink:href="img/svg/sprite.svg#tide"></use>
          </svg>
          <div class="weather-forcast__item-numbers">+2.3</div>
          <div class="weather-forcast__item-names">Tide (FT)</div>
        </div>
        <div class="weather-forcast__item">
          <svg class="weather-forcast__item-svg" width="26" height="24">
            <use xlink:href="img/svg/sprite.svg#wind"></use>
          </svg>
          <div class="weather-forcast__item-numbers">4 SE</div>
          <div class="weather-forcast__item-names">Wind (KTS)</div>
        </div>
    `;
  map.prepend(weatherPopup);
  const startDot = map.querySelector('[data-path="6"]');
  const startDotRec = startDot.getBoundingClientRect();
  const popupRect = weatherPopup.getBoundingClientRect();
  const mapRect = map.getBoundingClientRect();
  const popupWidth = popupRect.width;
  const popupHeight = popupRect.height;

  let left =
    startDotRec.left + startDotRec.width / 2 - popupWidth / 2 - mapRect.left;
  let top = startDotRec.top - popupHeight * 2 - 10 - mapRect.top;
  weatherPopup.style.position = "absolute";
  weatherPopup.style.left = `${left}px`;
  weatherPopup.style.top = `${top}px`;

  addActiveClass();
}
getStartPopupPosition();

function getCurrentPopupPosition(dot) {
  const popupRect = weatherPopup.getBoundingClientRect();
  const mapRect = map.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();
  const popupWidth = popupRect.width;
  const popupHeight = popupRect.height;
  let left = dotRect.left + dotRect.width / 2 - popupWidth / 2 - mapRect.left;
  let top = dotRect.top - popupHeight - 10 - mapRect.top;

  if (left + popupWidth > mapRect.width) {
    left = mapRect.width - popupWidth;
  }
  if (left < 0) {
    left = 0;
  }

  if (top < 0 && window.innerWidth <= 768) {
    top = 0;
  }


  weatherPopup.style.position = "absolute";
  weatherPopup.style.left = `${left}px`;
  weatherPopup.style.top = `${top}px`;

}

function renderPopup() {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", (event) => {
      event.preventDefault();

      let dataPath = dot.getAttribute("data-path");
      surfSlider.slideToLoop(parseInt(dataPath), 700);
      removeActiveClass();

      beaches.forEach((beach) => {
        if (beach.id == dataPath) {
          weatherPopup.innerHTML = `
  
        <div class="weather-forcast__names">
              <div class="weather-forcast__names-box">
                <h4 class="weather-forcast__shore">${beach.beach}</h4>
                <h5 class="weather-forcast__country">${beach.country}</h5>
              </div>
              <a class="weather-forcast__link" href="#!">
                 <svg class="weather-forcast__svg" width="17" height="14">
                  <use xlink:href="img/svg/sprite.svg#weather-arrow"></use>
                 </svg>
              </a>
            </div>
    
            <div class="weather-forcast__data">
              <div class="weather-forcast__item">
                  <svg class="weather-forcast__item-svg" width="40" height="25">
                    <use xlink:href="img/svg/sprite.svg#surf"></use>
                  </svg>
                <div class="weather-forcast__item-numbers">9 - 13</div>
                <div class="weather-forcast__item-names">Surf (FT)</div>
              </div>
              <div class="weather-forcast__item">
                <svg class="weather-forcast__item-svg"  width="19" height="25">
                  <use xlink:href="img/svg/sprite.svg#tide"></use>
                </svg>
                <div class="weather-forcast__item-numbers">+2.3</div>
                <div class="weather-forcast__item-names">Tide (FT)</div>
              </div>
              <div class="weather-forcast__item">
                <svg class="weather-forcast__item-svg" width="26" height="24">
                  <use xlink:href="img/svg/sprite.svg#wind"></use>
                </svg>
                <div class="weather-forcast__item-numbers">4 SE</div>
                <div class="weather-forcast__item-names">Wind (KTS)</div>
              </div>
          `;
          map.prepend(weatherPopup);
        }
      });

      getCurrentPopupPosition(dot);
      addActiveClass();
    });
  });
}
renderPopup();

surfSlider.on("slideChange", () => {
  const currentIndex = surfSlider.realIndex;

  // console.log(currentIndex);
  
});

function addActiveClass() {
  weatherPopup.classList.add("weather-forcast-visible");
}

function removeActiveClass() {
  weatherPopup.classList.remove("weather-forcast-visible");
}


