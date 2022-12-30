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
const nav = document.querySelector(".navbar");
const topOfNav = nav.offsetTop;

// Navbar sticky behavior
const navBarStick = () => {
  console.log(topOfNav);
  if (window.scrollY > topOfNav) {
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
