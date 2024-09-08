// working with time and date
// link to the documentation of luxon instructions: https://moment.github.io/luxon/#/tour

import { DateTime } from "luxon";

// examples
const data = DateTime.now();
const now = data;
console.log(now);

console.log(now.year);
console.log(now.month);
console.log(now.day);
console.log(`Now is - ${now.hour}:${now.minute}:${now.second}`);
console.log((data.toString().slice(0, 10)).split(':').reverse().join(':'));

console.log(now.plus({ hours: 3, minutes: 2 }).toString());
console.log(now.minus({ days: 7 }).toString().slice(0, 10));
console.log(now.startOf('day').toString());
console.log(now.endOf('hour').toString());

const time = document.querySelector('.time');
console.log(time);

time.innerHTML = `Now is - ${now.hour}:${now.minute}`;

// const now2 = new Date();
// const date = new Intl.DateTimeFormat('ru');
// const currentDate = document.querySelector('.time');
// currentDate.innerHTML = date.format(now2);