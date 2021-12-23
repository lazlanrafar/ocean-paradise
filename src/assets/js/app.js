let body = document.querySelector("body");

let navbar = document.querySelector(".navbar");

let dayNight = document.querySelector(".dayNight");
let menuToggle = document.querySelector(".menuToggle");

dayNight.onclick = function () {
  body.classList.toggle("dark");
  dayNight.classList.toggle("active");
};

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
};
