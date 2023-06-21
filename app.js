"use script";

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

// Where i stopped working on  Next person start five lines below me!





// Beginning of Justin's code
let ctx = document.getElementById("chart-canvas");

let ctx1 = new Chart(chart, {
  type: "pie",
  data: {
    labels: ["Largemouth bass", "White bass", "Bluegill", "Striped bass", "Smallmouth bass"],
    datasets: [
      {
        label: "Fish Population",
        data: [],
      },
    ],
  },
  options: {},
});
