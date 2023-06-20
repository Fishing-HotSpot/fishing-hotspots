"use script";
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
