

function addZero(d) {
  return d < 10 ? '0' + d : d;
}

const today = new Date();

const displayDays = document.querySelectorAll('.header__date-day');
const displayMonths = document.querySelectorAll('.header__date-month');
const displayYears = document.querySelectorAll('.header__date-year');


displayDays.forEach((day) => {
  day.innerHTML = addZero(today.getDate());
})

displayMonths.forEach((month) => {
  month.innerHTML = addZero(today.getMonth() + 1);
})

displayYears.forEach((year) => {
  year.innerHTML = addZero(today.getFullYear());
})


