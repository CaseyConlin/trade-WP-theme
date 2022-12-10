const navSearchButton = document.querySelector(".search-button");

const searchButtonHandler = (e) => {
  const navField = document.querySelector(".search-in-nav");
  if (!navField.classList.contains("search-in-nav-show")) {
    e.preventDefault();
    navField.classList.toggle("search-in-nav-show");
  }
};
navSearchButton.addEventListener("click", searchButtonHandler);
