"use script";

"use strict";

let voterLimit = 25;
let votingArea = document.getElementById("voting-area");
let resultsArea = document.getElementById("results-area");

let lake1Img = document.getElementById("lake1");
let lake2Img = document.getElementById("lake2");
let lake3Img = document.getElementById("lake3");

function Lake(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
}

let oldhickory = new Lake("old-hickory", "./img/Old hickory Lake.jpeg");
let percy = new Lake("percy", "./img/Percy Priest Lake.jpeg");
let radnor = new Lake("radnor", "./img/Radnor Lake.jpeg");

let lakeArray = [];

lakeArray.push(oldhickory);
lakeArray.push(percy);
lakeArray.push(radnor);

function setLakeImages(lake1, lake2, lake3) {
  lake1Img.src = lake1.imgSrc;
  lake1Img.alt = lake1.name;
  lake1Img.title = lake1.name;
  lake2Img.src = lake2.imgSrc;
  lake2Img.alt = lake2.name;
  lake2Img.title = lake2.name;
  lake3Img.src = lake3.imgSrc;
  lake3Img.alt = lake3.name;
  lake3Img.title = lake3.name;
}

function getRandomInt() {
  return Math.floor(Math.random() * lakeArray.length);
}

function setRandomLakeImages() {
  let lakeIndex1 = getRandomInt(lakeArray.length);
  let lakeIndex2 = getRandomInt(lakeArray.length);
  let lakeIndex3 = getRandomInt(lakeArray.length);
  while (
    lakeIndex1 === lakeIndex2 ||
    lakeIndex1 === lakeIndex3 ||
    lakeIndex2 === lakeIndex3
  ) {
    lakeIndex1 = getRandomInt(lakeArray.length);
    lakeIndex2 = getRandomInt(lakeArray.length);
    lakeIndex3 = getRandomInt(lakeArray.length);
  }
  let lake1 = lakeArray[lakeIndex1];
  let lake2 = lakeArray[lakeIndex2];
  let lake3 = lakeArray[lakeIndex3];
  setLakeImages(lake1, lake2, lake3);
}

setRandomLakeImages();

function handleProductClick(event) {
  console.log("clicked!!");
  event.preventDefault();
  let target = event.target;
  let lakeName = target.alt;
  console.log(lakeName);

  let theBestLake;
  for (let i = 0; i < lakeArray.length; i++) {
    let lake = lakeArray[i];
    if (lake.name === target.alt) {
      theBestLake = lake;
    }
  }
  theBestLake.voteCount++;
  voterLimit--;
  if (voterLimit == 0) {
    votingArea.removeEventListener("click", handleProductClick);
  }
  setRandomLakeImages();
}

votingArea.addEventListener("click", handleProductClick);

function renderResults(event) {
  event.preventDefault();
  resultsArea.innerHTML = "";
  let lakeUL = document.createElement("ul");
  for (let i = 0; i < lakeArray.length; i++) {
    let lake = lakeArray[i];
    let lakeName = lake.name;
    let lakeVoteCount = lake.voteCount;
    let report = `${lakeName} had ${lakeVoteCount} votes.`;
    let lakeLI = document.createElement("li");
    lakeLI.textContent = report;
    lakeUL.appendChild(lakeLI);
  }
  resultsArea.appendChild(lakeUL);
}
let showResultsButton = document.getElementById("show-results-button");
showResultsButton.addEventListener("click", renderResults);
