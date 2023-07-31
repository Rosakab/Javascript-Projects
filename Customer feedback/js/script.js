const slide = document.querySelector(".slider").children;
console.log(slide);
const indicator = document.querySelector(".slider-indicator").children;
console.log(indicator);

for (i = 0; i < indicator.length; i++) {
  indicator[i].addEventListener("click", function () {
    for (j = 0; j < indicator.length; j++) {
      indicator[j].classList.remove("active"); //  "for" removes all active classes
    }
    this.classList.add("active"); //"this" points to the element that is clicked

    const id = this.getAttribute("data-id");
    for (z = 0; z < slide.length; z++) {
      slide[z].classList.remove("active");
    }

    slide[id].classList.add("active");
  });
}
