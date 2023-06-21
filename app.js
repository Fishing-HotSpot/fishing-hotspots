// Brian's Radnor lake chart code Begining
let chart = document.getElementById("chart-canvas").getContext("2d");

let chart1 = new Chart(chart, {
  type: "doughnut",
  data: {
    labels: ['Bass", "Catfish", "Trout", "Blue Gill'],
    datasets: [
      {
        label: "Fish Population",
        data: [22000, 18000, 12200, 10000],
      },
    ],
  },
  options: {},
});

function Lake(name, fishPopulation) {
  this.name = name;
  this.fishPopulation = fishPopulation;
}

let searchEngine = [
  new Lake("Radnor", [22000, 18000, 12200, 10000]),
  new Lake("Percy Priest", [22000, 18000, 12200, 10000]),
  new Lake("Old Hickory", [22000, 18000, 12200, 10000, 16000]),
];

let form = document.querySelector(".search-form");
let searchButton = document.getElementById("search-button");

form.addEventListener("submit", function(event) {
  event.preventDefault();

 lakeCount();
});
  
// Somethingg wrong with this function  making chart disapear
// function lakeCount() {
//   let searchInput = document.getElementById("search-input");
//   let searchTerm = searchInput.value.trim();
//   let searchResults = searchEngine.filter(function(lake){
//     return lake.name.toLowerCase().includes(searchTerm.toLowerCase());
//  });

  chartData.datasets = [];
  
  searchResults.forEach(function(lake) {
    let datasets = {
      label:lake.name,
      data:lake.fishPopulation,
    };
    chartData.datasets.push(datasets);
  });

  //chart1.update();
searchInput.value = "";


//Start of Mu Code
chart;
let ctx = document.getElementById("canvas-chart-b");
let dataObj = {
  type: "doughnut",
  data: {
    labels: [
      "Largemouth Bass",
      "Crappie",
      "Striped Bass",
      "Sauger",
      "Channel Catfish",
    ],
    datasets: [
      {
        label: "Fish Population",
        data: [22000, 18000, 12200, 10000, 16000],
      },
    ],
  },
};

// Where i stopped working on  Next person start five lines below me!

// Beginning of Justin's code