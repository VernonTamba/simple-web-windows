// DATE AND TIME CONFIGURATION
let today = new Date();
// index.html elements
const topContainer = document.querySelector(".container__top");
const bottomContainer = document.querySelector(".container__bottom");
// home.html elements
const time = document.querySelector(".time");
const dateHome = document.querySelector(".dateHome");
const dateIndex = document.querySelector(".dateIndex");
const taskbarIcon = document.querySelectorAll(".taskbar__icon");
const appPreview = document.querySelector(".appPreview");
const appPreviewImage = document.querySelector(".appPreview__image");
const appPreviewHeader = document.querySelector(".appPreview__header");
const taskbarMiddleIcons = document.querySelectorAll(".middle-icons");
const previousButton = document.querySelector(
  ".taskbar__middle-button.previous"
);
const nextButton = document.querySelector(".taskbar__middle-button.next");
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

// Set the current date and time
setInterval(function () {
  let currentDate = `${
    months[today.getUTCMonth()]
  } ${today.getUTCDate()}, ${today.getUTCFullYear()}`;
  let currentDateHome__day =
    today.getUTCDate().toString().length === 1
      ? `0${today.getUTCDate()}`
      : today.getUTCDate();
  let currentDateHome__month =
    today.getUTCMonth().toString().length === 1
      ? `0${today.getUTCMonth() + 1}`
      : today.getUTCMonth() + 1;
  let currentHours =
    today.getHours().toString().length === 1
      ? `0${today.getHours()}`
      : today.getHours();
  let currentMinutes =
    today.getMinutes().toString().length === 1
      ? `0${today.getMinutes()}`
      : today.getMinutes();
  let currentDateHome = `${currentDateHome__day}/${currentDateHome__month}/${today.getUTCFullYear()}`;
  let currentTime = `${currentHours}:${currentMinutes}`;
  time.textContent = currentTime;
  dateHome.textContent = currentDateHome;
  dateIndex.textContent = currentDate;
}, 1000);

// Behavior of the taskbar icons when they are clicked
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

// GSAP for selected elements
const timeline = gsap.timeline();

// Landing Page Screen: Floating Up Containers
gsap.from(topContainer, {
  duration: 1.25,
  y: "30%",
});
gsap.from(bottomContainer, {
  duration: 1.25,
  y: "90%",
});

// Home Page Screen: Floating Down Taskbar Icons
taskbarIcon.forEach((icon) => {
  timeline.fromTo(
    icon,
    { y: -60 },
    { duration: 0.1, y: 0, ease: "circ.out", delay: 0.05 }
  );
});

// Previous and Next Buttons to navigate through taskbar icons
let currentActiveTaskbarIcon = 0;
let checkOnce = true;

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1150) {
    if (checkOnce) {
      trackActiveTaskbarIconChanges();
      checkActiveTaskbarIcon(currentActiveTaskbarIcon);
      checkOnce = false;
    }
  } else {
    previousButton.style.display = "none";
    nextButton.style.display = "none";
    taskbarMiddleIcons.forEach((icons) => {
      icons.style.display = "block";
    });
    checkOnce = true;
  }
});

previousButton.addEventListener("click", () => {
  currentActiveTaskbarIcon--;
  trackActiveTaskbarIconChanges();
  checkActiveTaskbarIcon(currentActiveTaskbarIcon);
});
nextButton.addEventListener("click", () => {
  currentActiveTaskbarIcon++;
  trackActiveTaskbarIconChanges();
  checkActiveTaskbarIcon(currentActiveTaskbarIcon);
});

const trackActiveTaskbarIconChanges = () => {
  if (currentActiveTaskbarIcon === 0) {
    previousButton.style.display = "none";
    nextButton.style.display = "block";
  } else if (currentActiveTaskbarIcon === taskbarMiddleIcons.length - 1) {
    previousButton.style.display = "block";
    nextButton.style.display = "none";
  } else {
    previousButton.style.display = "block";
    nextButton.style.display = "block";
  }
};

const checkActiveTaskbarIcon = (currentActive) => {
  taskbarMiddleIcons.forEach((icon) => {
    if (taskbarMiddleIcons[currentActive] === icon) {
      icon.style.display = "block";
    } else {
      icon.style.display = "none";
    }
  });
};

// Notes for future learning purposes.
// TODO: Try to use GSAP for the animation/transition of the app preview
// TODO: Learn more about GSAP! And try to see add() and other stuff in the docs!
// TODO: Add page transition?
