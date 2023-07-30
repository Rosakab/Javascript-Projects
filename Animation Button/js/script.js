const buttonEl = document.querySelectorAll("button");
buttonEl.forEach((button) => {
  button.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    console.log(x, y);
    let span = document.createElement("span");
    span.style.left = x + "px";
    span.style.top = y + "px";
    this.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 1000);
  });
});
