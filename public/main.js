"use strict";

let cardTanya = document.querySelector(".card-1");
let cardJohn = document.querySelector(".card-2");
let sliderBtns = document.querySelectorAll(".slider-btn");

sliderBtns.forEach(btn => btn.addEventListener("click", changeCard));

function changeCard() {
  if (cardTanya.className.includes("hidden")) {
    cardJohn.classList.add("hidden");
    cardTanya.classList.remove("hidden");
    return;
  }

  cardTanya.classList.add("hidden");
  cardJohn.classList.remove("hidden");
}
