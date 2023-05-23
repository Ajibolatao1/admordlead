const dateEl = document.querySelector(".date");

// The date function
const currentYear = new Date().getFullYear();

if (currentYear <= 2023) {
  dateEl.textContent = new Date().getFullYear();
} else {
  dateEl.textContent = `2023 - ${currentYear}`;
}
