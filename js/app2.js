"use strict";

const fishTypes = [
  "Largemouth bass",
  "White bass",
  "Bluegill",
  "Striped bass",
  "Smallmouth bass",
];
const fishCount = [22000, 15000, 12200, 10000, 16000];

new Chart("chart-canvas-b", {
  type: "line",
  data: {
    labels: fishTypes,
    datasets: [
      {
        data: fishCount,
      },
    ],
  },
  options: {},
});
