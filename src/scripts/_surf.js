import { beaches } from "./data.js";

const map = document.querySelector(".surf__map-svg-track");
// console.log(window.offsetHeight);


const dots = document.querySelectorAll(".surf__map .surf__map-dot");
// const sliderItems = document.querySelectorAll(".surf__slider-item");
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
  const startDot = map.querySelector('[data-path="seven"]');
  const startDotRec = startDot.getBoundingClientRect();
  const popupRect = weatherPopup.getBoundingClientRect();
  const mapRect = map.getBoundingClientRect();
  const popupWidth = popupRect.width;
  const popupHeight = popupRect.height;
  console.log(popupHeight, popupWidth); // result 0 0  must be 217 283

  let left = startDotRec.left + startDotRec.width / 2 - popupWidth / 2 - mapRect.left;
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
  console.log(mapRect.width);
  
  if (left + popupWidth > mapRect.width) {
    left = mapRect.width - popupWidth;
  }
  if (left < 0) {
    left = 0;
  }

  if (top < 0) {
     top = 0;
  }

  weatherPopup.style.position = "absolute";
  weatherPopup.style.left = `${left}px`;
  weatherPopup.style.top = `${top}px`;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", (event) => {
    event.preventDefault();
    let dataPath = dot.getAttribute("data-path");
    removeActiveClass();
    beaches.forEach((beach) => {
      if (dataPath == beach.id) {
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

function addActiveClass() {
  weatherPopup.classList.add("weather-forcast-visible");
}

function removeActiveClass() {
  weatherPopup.classList.remove("weather-forcast-visible");
}

// async function getPopupData() {
//   let response = await fetch(`data.json`, { method: "GET" });
//   let data = await response.json();
//   data.forEach((item) => {
//     if (item.id == dataId) {
//       popupInner.innerHTML = `
//       <h2 class="popup__capital"> ${item.capital}</h2>
//       <img class="popup__img" src="${item.src}" alt="${item.alt}">
//      `;
//       addActiveClass();
//     }
//   });
// }

// getPopupData();

// function fetchWeatherData(lat, lon) {
//   const apiKey = "YOUR_API_KEY";
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       // Преобразуем данные в удобный формат
//       return {
//         temperature: data.main.temp,
//         wind: data.wind.speed,
//         // ... другие данные ...
//       };
//     });}
