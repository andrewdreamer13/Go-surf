

function addZero(d) {
  return d < 10 ? '0' + d : d;
}

const today = new Date();

const displayDay = document.querySelector('.header__date-day');
const displayMonth = document.querySelector('.header__date-month');
const displayYear = document.querySelector('.header__date-year');


displayDay.innerHTML = addZero(today.getDate());
displayMonth.innerHTML = addZero(today.getMonth() + 1);
displayYear.innerHTML = addZero(today.getFullYear());