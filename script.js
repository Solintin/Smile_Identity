const getNav = document.querySelector(".header_content-mobile");
const navButton = document.querySelector("#toggleButton");

navButton.addEventListener("click", () => {
  getNav.classList.toggle("open");
});
