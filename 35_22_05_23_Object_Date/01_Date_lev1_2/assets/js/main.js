const monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

let month = date.getMonth();
console.log(month + " Monat");

let day = date.getDay();
console.log(day + " Tag");

let hour = date.getHours();
console.log(hour + " Stunde ");

let minutes = date.getMinutes();
console.log(minutes + " Minute");

let seconds = date.getUTCSeconds();
console.log(seconds + " Sekunde");

let weekDay = wochenTag[date.getDay()];
console.log(weekDay);

let monthName = monate[date.getMonth()];
console.log(monthName);

let monthDay = date.getDate();

const dayOutput = document.querySelector(".day");
const hourOutput = document.querySelector(".hours");
const minutesOutput = document.querySelector(".minutes");
const secondsOutput = document.querySelector(".seconds");
const monthOutput = document.querySelector(".month");
const monthDayOutput = document.querySelector(".monthday");

dayOutput.innerHTML = weekDay + ", den";
hourOutput.innerHTML = hour;
minutesOutput.innerHTML = minutes;
secondsOutput.innerHTML = seconds;
monthDayOutput.innerHTML = monthDay + ".";
monthOutput.innerHTML = monthName;
