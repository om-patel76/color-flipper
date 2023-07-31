"use strict";

const flpBtn = document.querySelector(".flip-btn");

flpBtn.addEventListener("click", function changeColor() {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let color = "rgb(" + red + "," + green + "," + blue + ")";
  document.getElementById("color-flipper").style.backgroundColor = color;
});
