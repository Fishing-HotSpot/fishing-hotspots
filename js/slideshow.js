"use strict";
let images = [
  "/img/andrea.jpg",
  "/img/brian.jpg",
  "/img/justin.jpg",
  "/img/mu.jpg",
];
let caption = [
  "Andrea Malone - Installation Specialist",
  "Brian Kimbrow - Intern 40AU",
  "Justin Agim - Auto Technician ",
  "Ajamu Page - GED Instructor",
];

let imageNumber = 0;
let imageLength = images.length - 1;

function changeImage(X) {
  imageNumber += X;
  if (imageNumber > imageLength) {
    imageNumber = 0;
  }
  if (imageNumber < 0) {
    imageNumber = imageLength;
  }
  document.getElementById("slideshow").src = images[imageNumber];
  document.getElementById("caption").innerHTML = caption[imageNumber];
  return false;
}

function autoRun() {
  setInterval(changeImage, 6000, 1);
}
