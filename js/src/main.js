// Search button behavior
const navSearchButton = document.querySelector(".search-button");
const searchField = document.querySelector(".form-control");

const searchButtonHandler = (e) => {
  const navField = document.querySelector(".search-in-nav");
  if (!navField.classList.contains("search-in-nav-show")) {
    e.preventDefault();
    navField.classList.toggle("search-in-nav-show");
    searchField.focus();
  }
};
navSearchButton.addEventListener("click", searchButtonHandler);

const navBar = document.querySelector(".navbar");
const customHeader = document.querySelector("#wp-custom-header");
const navLogo = document.querySelector(".navbar-brand");

// Navbar sticky behavior
const navBarStick = () => {
  if (window.innerWidth < 600 && window.scrollY > 0) {
    navBar.classList.add("sticky-top");
  } else if (window.scrollY > 19) {
    navBar.classList.add("sticky-top");
    navBar.classList.remove("navbar-push-down");
    navLogo.classList.add("logo-sticky-top");
    customHeader.classList.add("header-sticky-offset");
  } else {
    navBar.classList.remove("sticky-top");
    navBar.classList.add("navbar-push-down");
    navLogo.classList.remove("logo-sticky-top");
    customHeader.classList.remove("header-sticky-offset");
  }
};

if (document.querySelector(".home")) {
  window.onscroll = navBarStick;
}
