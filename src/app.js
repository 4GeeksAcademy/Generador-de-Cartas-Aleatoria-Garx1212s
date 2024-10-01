/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  const theCardId = document.getElementById("cardId");
  let icons = ["♦", "♥", "♠", "♣"];
  let character = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let colorClass = "text-black";

  let randomIcon = Math.floor(Math.random() * icons.length);
  let currentIcon = icons[randomIcon];

  if (currentIcon === "♥" || currentIcon === "♦") {
    colorClass = "text-danger";
  }

  let randomNum = Math.floor(Math.random() * character.length);
  let currentCharacter = character[randomNum];

  let thisHTML = `<div class="d-flex justify-content-start mb-5 p-2 ${colorClass}">
  <span class="fs-1">${currentIcon}</span>
  </div>

  <div>
    <h1 class="d-flex justify-content-center mt-5 mb-5 p-5 ${colorClass}">${currentCharacter}</h1>
  </div>

  <div class="d-flex justify-content-end mt-5 p-2 ${colorClass}">
  <span class="fs-1" style="transform:rotate(180deg)">${currentIcon}</span>
  </div>`;

  theCardId.innerHTML = thisHTML;
  console.log(Math.floor(Math.random() * 13 + 1));
};
