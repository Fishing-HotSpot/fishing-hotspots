"use script";

let chart = document.getElementById('chart').getContext('2d');

let chart1 = new Chart(chart, {
  type: 'bar',
  data: {
    labels: ['Bass", "Catfish", "Trout", "Blue Gill'],
    datasets: [
      {
        label: 'Fish Population',
        data: [22000, 18000, 12200, 10000],
      },
    ],
  },
  options: {},
});
console.log(Chart);
