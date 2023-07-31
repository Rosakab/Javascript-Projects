const search = document.querySelector(".search");
const input = document.querySelector(".input");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", function () {
  search.classList.toggle("active");
  input.focus();
});

