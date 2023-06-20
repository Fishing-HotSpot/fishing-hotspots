"use script";
<<<<<<< HEAD
let chart;
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
        data: [],
      },
    ],
  },
};
=======

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
  new Lake("Old Hickory", [22000, 18000, 12200, 10000]),
];



// Where i stopped working on  Next person start five lines below me!

// Beginning of Justin's code
>>>>>>> main
