// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".menu-control");
const headerEl = document.querySelector(".links-grid");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  // document.querySelector(".menu-open").classList.toggle("hidden");
  // document.querySelector(".menu-close").classList.toggle("block");
});
