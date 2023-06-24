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


// Slideshow 

let images = ["/img/andrea.jpg", "/img/brian.jpg", "/img/justin.jpg", "/img/mu.jpg"];
let caption = [
  "Andrea Malone - Installation Specialist",
  "Brian Kimbrow - Intern 40AU", 
  "Justin Agim - Auto Technician ", 
  "Ajamu Page - GED Instructor "

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




