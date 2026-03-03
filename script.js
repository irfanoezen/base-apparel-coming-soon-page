"use strict";

const heroImg = document.querySelector(".hero__img");
if (window.innerWidth >= 1440) {
  heroImg.setAttribute("src", "assets/images/hero-desktop.jpg");
} else {
  heroImg.setAttribute("src", "assets/images/hero-mobile.jpg");
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1440) {
    heroImg.setAttribute("src", "assets/images/hero-desktop.jpg");
  } else {
    heroImg.setAttribute("src", "assets/images/hero-mobile.jpg");
  }
});

const errorMessage = document.querySelector("#error-message");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", () => {
  const emailInput = document.querySelector("#input-field");
  emailInput.addEventListener("invalid", (event) => {
    errorMessage.textContent = "Please provide a valid email!";
  });
});
