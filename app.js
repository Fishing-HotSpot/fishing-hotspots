// Brian's Radnor lake chart code Begining
let chart = document.getElementById("chart-canvas").getContext("2d");

let chartData = {
  labels: ["Bass", "Catfish", "Trout", "Blue Gill"],
  datasets: [
    {
      label: "Fish Population",
      data: [22000, 18000, 12200, 10000],
    },
  ],
};

let chart1 = new Chart(chart, {
  type: "doughnut",
  data: chartData,
  options: {},
});

function Lake(name, fishPopulation) {
  this.name = name;
  this.fishPopulation = fishPopulation;
}

let searchEngine = [
  new Lake("Radnor", [12000, 1000, 1200, 10000]),
  new Lake("Percy Priest", [2000, 18000, 10200, 5000]),
  new Lake("Old Hickory", [12000, 15000, 12200, 10000, 16000]),
];

let form = document.querySelector(".search-form");
let searchButton = document.getElementById("search-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  lakeCount();
});

function lakeCount() {
  let searchInput = document.getElementById("search-input");
  let searchTerm = searchInput.value.trim();
  let searchResults = searchEngine.filter(function (lake) {
    return lake.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  chartData.datasets = [];

  searchResults.forEach(function (lake) {
    let dataset = {
      label: lake.name,
      data: lake.fishPopulation,
    };
    chartData.datasets.push(dataset);
  });

  chart1.update();
  searchInput.value = "";
}



//Start of Mu Code
chart;
let ctx = document.getElementById("canvas-chart-b");
let dataObj = {
  type: "line",
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
=======
// andrea slide show 



// Beginning of Justin's code
let ctxx = document.getElementById("canvas-chart");

let ctxx1 = new Chart(chart, {
  type: "bar",
=======
//Start of Justin Code
let ctx1 = document.getElementById("chart-canvas");

ctx1 = new Chart(chart, {
  type: "pie",

  data: {
    labels: [
      "Largemouth bass",
      "White bass",
      "Bluegill",
      "Striped bass",
      "Smallmouth bass",
    ],
    datasets: [
      {
        label: "Fish Population",
        data: [],
      },
    ],
  },
  options: {},
});
