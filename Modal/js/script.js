const openEl = document.querySelector("#open");
const closeEl = document.querySelector("#close");
const containerboxEl = document.querySelector(".containerbox");

openEl.addEventListener("click", () => {
  containerboxEl.classList.add("show");
});

closeEl.addEventListener("click", () => {
  containerboxEl.classList.remove("show");
});
