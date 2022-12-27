// DATE AND TIME CONFIGURATION
let today = new Date();
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const dateMonthName = document.querySelector(".dateMonthName");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(function () {
  let currentDate = `${
    months[today.getUTCMonth()]
  } ${today.getUTCDate()}, ${today.getUTCFullYear()}`;
  let currentDateHome = `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`;
  let currentTime = `${today.getHours()}:${today.getMinutes()}`;
  time.textContent = currentTime;
  date.textContent = currentDateHome;
  dateMonthName.textContent = "Hello World";
  console.log(currentDate, currentDateHome, currentTime);
}, 1000);
