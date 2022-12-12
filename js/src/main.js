const navSearchButton = document.querySelector(".search-button");

const searchButtonHandler = (e) => {
  const navField = document.querySelector(".search-in-nav");
  if (!navField.classList.contains("search-in-nav-show")) {
    e.preventDefault();
    navField.classList.toggle("search-in-nav-show");
  }
};
navSearchButton.addEventListener("click", searchButtonHandler);

const navBar = document.querySelector(".navbar");
const customHeader = document.querySelector("#wp-custom-header");
const navBarStick = () => {
  console.log(window.scrollY);
  if (window.scrollY > 19) {
    navBar.classList.add("sticky-top");
    navBar.classList.remove("navbar-push-down");
    customHeader.classList.add("header-sticky-offset");
  } else {
    navBar.classList.remove("sticky-top");
    navBar.classList.add("navbar-push-down");
    customHeader.classList.remove("header-sticky-offset");
  }
};

if (document.querySelector(".home")) {
  window.onscroll = navBarStick;
}
