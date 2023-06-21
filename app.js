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

function lakeCount() {
  for (let i = 0; i < searchEngine.length; i++);
}

//Start of Mu Code

chart;
function displayChart(data) {
  if (chart !== undefined) {
    chart.destroy();
  }
  let labels = getLabelData(data);
  let ctx = document.getElementById("chart-canvas-b");
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
  chart = new Chart(ctx, dataObj);
}

displayChart(data);

function getLabelData(data) {
  let labels = [];
  for (let data of data) {
    labels.push(data);
  }
  return labels;
}
// Where i stopped working on  Next person start five lines below me!

// Beginning of Justin's code
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
