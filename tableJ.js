'use strict'

let chart = document.getElementById("canvas-chart").getContext("2d");

let chartData = {
    labels: ["Largemouth Bass", "White Bass", "Blue Gill", "Striped Bass", "Smallmouth Bass"],
    datasets: [
        {
            label: "Fish Population",
            data: [25000, 16000, 12500, 10000, 17600],
        },
    ],
};

let chart1 = new Chart(chart, {
    type: "bar",
    data: chartData,
    options: {},
});

// function Lake(name, fishPopulation) {
//     this.name = name;
//     this.fishPopulation = fishPopulation;
// }

// let searchEngine = [
//     new Lake("Radnor", [12000, 1000, 1200, 10000]),
//     new Lake("Percy Priest", [2000, 18000, 10200, 5000]),
//     new Lake("Old Hickory", [12000, 15000, 12200, 10000, 16000]),
// ];

// let form = document.querySelector(".search-form");
// let searchButton = document.getElementById("search-button");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     lakeCount();
// });

// function lakeCount() {
//     let searchInput = document.getElementById("search-input");
//     let searchTerm = searchInput.value.trim();
//     let searchResults = searchEngine.filter(function (lake) {
//         return lake.name.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     chartData.datasets = [];

//     searchResults.forEach(function (lake) {
//         let dataset = {
//             label: lake.name,
//             data: lake.fishPopulation,
//         };
//         chartData.datasets.push(dataset);
//     });

//     chart1.update();
    // searchInput.value = "";


