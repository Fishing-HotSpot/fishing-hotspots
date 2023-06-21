"use strict"

let fish = [
    "Largemouth bass",
    "White bass",
    "Bluegill",
    "Striped bass",
    "Smallmouth bass"
];



fish.prototype.render = function () {
    let fishRow = document.createElement('tr');

    let fishNameTD = document.createElement('td');

    let tableElm = document.getElementById("tables");
    fishRow.appendChild(fishNameTD);
    tableElm.appendChild(fishRow);
}


let fish1 = new Fishes("Largemouth bass");
let fish2 = new Fishes("White bass");
let fish3 = new Fishes("Bluegill");
let fish4 = new Fishes("Striped bass");
let fish5 = new Fishes("Smallmouth bass");
console.log(fish1, fish2, fish3, fish4, fish5);
