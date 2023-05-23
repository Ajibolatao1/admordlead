const section1El = document.querySelector(".section__1");

const homeBtn = document.querySelector(".homeBtn");
const publishersBtn = document.querySelector(".publishersBtn");
// const advertisersBtn = document.querySelector(".advertisersBtn");
const aboutBtn = document.querySelector(".aboutBtn");
const servicesBtn = document.querySelector(".servicesBtn");
// const contactBtn = document.querySelector(".contactBtn");
const hamburgerBtn = document.querySelector(".hamburger");
const sidebarEl = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close__bar");
const dateEl = document.querySelector(".date");

//  generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * 11) + 1;
}

// on page load vanilla javascript
window.onload = function () {
  section1El.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/${getRandomNumber()}.webp') no-repeat center center/cover`;
};

// function to check if the scrol height of a page changes and print the height
// function checkScrollHeight() {
//   console.log(window.pageYOffset);
// }

// checkScrollHeight();

// print current height after scrolling
window.addEventListener("scroll", function () {
  // For mobile
  if (window.innerWidth <= 767) {
  }

  // for tablet
  else {
    if (window.pageYOffset <= 500) {
      removeAllActiveClass();
      homeBtn.classList.add("active");
      // publishersBtn.classList.remove("active");
    } 
    if (window.pageYOffset >= 500) {
      removeAllActiveClass();
      publishersBtn.classList.add("active");
    }
    if (window.pageYOffset >= 1000) {
      removeAllActiveClass();
      servicesBtn.classList.add("active");
    }
    if (window.pageYOffset >=  2500) {
      removeAllActiveClass();
      aboutBtn.classList.add("active");
    }
  }
});

// hamburger menu
hamburgerBtn.addEventListener("click", function () {
  sidebarEl.classList.remove("hide__bar");
});
closeBtn.addEventListener("click", function () {
  sidebarEl.classList.add("hide__bar");
});

// The date function
const currentYear = new Date().getFullYear();

if (currentYear <= 2023) {
  dateEl.textContent = new Date().getFullYear();
} else {
  dateEl.textContent = `2023 - ${currentYear}`;
}

// function to check if the screen size is greater than 768px and hide the sidebar

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    sidebarEl.classList.add("hide__bar");
  }
});


// function remove all active class
function removeAllActiveClass() {
  homeBtn.classList.remove("active");
  publishersBtn.classList.remove("active");
  // advertisersBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
  servicesBtn.classList.remove("active");
  // contactBtn.classList.remove("active");
}