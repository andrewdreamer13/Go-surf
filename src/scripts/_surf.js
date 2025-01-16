const dots = document.querySelectorAll('.surf__map-svg .surf__map-dot');
const sliderItems = document.querySelectorAll('.surf__slider-item');
const weathers = document.querySelectorAll('.surf__weather');
console.log(dots)
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(dot => {
      dot.classList.remove('dot-bg');
      dots[index].classList.add('dot-bg');
    })
    sliderItems.forEach((item, itemIndex) => {
      itemIndex = index;
      item.classList.remove('surf__bg');
      sliderItems[itemIndex].classList.add('surf__bg');
    })
    weathers.forEach((weather, weatherIndex) => {
      weatherIndex = index;
      weather.classList.remove('show');
      weathers[weatherIndex].classList.add('show');
    })

  })
});