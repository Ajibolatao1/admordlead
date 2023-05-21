const section1El = document.querySelector(".section__1");

//  generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * 11) + 1;
}

// on page load vanilla javascript
window.onload = function () {
    section1El.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/${getRandomNumber()}.webp') no-repeat center center/cover`;
};

