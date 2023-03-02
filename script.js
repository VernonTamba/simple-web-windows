// DATE AND TIME CONFIGURATION
let today = new Date();
const time = document.querySelector(".time");
const dateHome = document.querySelector(".dateHome");
const dateIndex = document.querySelector(".dateIndex");
// const dateMonthName = document.querySelector(".dateMonthName");
const taskbarIcon = document.querySelectorAll(".taskbar__icon");
const appPreview = document.querySelector(".appPreview");
const appPreviewImage = document.querySelector(".appPreview__image");
const appPreviewHeader = document.querySelector(".appPreview__header");
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
let iconsClicked = [];

setInterval(function () {
  let currentDate = `${
    months[today.getUTCMonth()]
  } ${today.getUTCDate()}, ${today.getUTCFullYear()}`;
  let currentDateHome__day =
    today.getUTCDate().toString.length === 1
      ? `0${today.getUTCDate()}`
      : today.getUTCDate();
  let currentDateHome__month =
    today.getUTCMonth().toString.length === 1
      ? `0${today.getUTCMonth() + 1}`
      : today.getUTCMonth() + 1;
  let currentDateHome = `${currentDateHome__day}/${currentDateHome__month}/${today.getUTCFullYear()}`;
  let currentTime = `${today.getHours()}:${today.getMinutes()}`;
  time.textContent = currentTime;
  dateHome.textContent = currentDateHome;
  dateIndex.textContent = currentDate;
}, 1000);

taskbarIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    iconsClicked.push(icon);
    if (
      appPreview.classList.contains("appPreview--display") &&
      appPreviewImage.getAttribute("src") === `./img/preview/${icon.alt}.jpg`
    ) {
      appPreview.classList.remove("appPreview--display");
      icon.classList.remove("taskbar__icon--active");
      iconsClicked = [];
    } else {
      if (iconsClicked.length > 1) {
        icon.classList.remove("taskbar__icon--active");
        iconsClicked[0].classList.remove("taskbar__icon--active");
        iconsClicked.splice(0, 1);
      }
      appPreview.classList.add("appPreview--display");
      icon.classList.add("taskbar__icon--active");
    }
    appPreviewHeader.textContent = icon.alt;
    appPreviewImage.src = `./img/preview/${icon.alt}.jpg`;
  });
});

// TODO: Add Page Transition!
