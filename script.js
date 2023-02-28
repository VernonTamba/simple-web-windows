// DATE AND TIME CONFIGURATION
let today = new Date();
const wallpaperIcons = document.querySelectorAll(".wallpaper__icon");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
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
  let currentDateHome = `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`;
  let currentTime = `${today.getHours()}:${today.getMinutes()}`;
  time.textContent = currentTime;
  date.textContent = currentDateHome;
}, 1000);

taskbarIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    iconsClicked.push(icon);
    if (
      appPreview.classList.contains("appPreview--display") &&
      appPreviewImage.style.backgroundImage ===
        `url("./img/preview/${icon.alt}.jpg")`
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
    appPreviewImage.style.backgroundImage = `url("./img/preview/${icon.alt}.jpg")`;
  });
});
