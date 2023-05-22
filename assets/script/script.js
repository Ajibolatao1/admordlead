const section1El = document.querySelector(".section__1");

const homeBtn = document.querySelector(".homeBtn")
const publishersBtn = document.querySelector(".publishersBtn")
const advertisersBtn = document.querySelector(".advertisersBtn")
const aboutBtn = document.querySelector(".aboutBtn")
const servicesBtn = document.querySelector(".servicesBtn")
const contactBtn = document.querySelector(".contactBtn")

//  generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * 11) + 1;
}

// on page load vanilla javascript
window.onload = function () {
    section1El.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/${getRandomNumber()}.webp') no-repeat center center/cover`;
};


// function to check if the scrol height of a page changes and print the height
function checkScrollHeight() {
  console.log(window.pageYOffset);
}

checkScrollHeight();

// print current height after scrolling
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 508.5) {
    console.log(window.pageYOffset);
    homeBtn.classList.remove("active");
    publishersBtn.classList.add("active");
  }
    
  }
);