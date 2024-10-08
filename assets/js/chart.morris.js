$(document).ready(function () {
  lineChart();
  donutChart();
  pieChart();
  $(window).resize(function () {
    window.lineChart.redraw();
    window.donutChart.redraw();
    window.pieChart.redraw();
  });
});
function lineChart() {
  window.lineChart = Morris.Line({
    element: "line-chart",
    data: [
      { y: "2018", a: 100, b: 90 },
      { y: "2019", a: 75, b: 65 },
      { y: "2020", a: 50, b: 40 },
      { y: "2021", a: 75, b: 65 },
      { y: "2022", a: 50, b: 40 },
      { y: "2023", a: 75, b: 65 },
      { y: "2024", a: 100, b: 90 },
    ],
    xkey: "y",
    ykeys: ["a", "b"],
    labels: ["Oda 1", "Oda 2"],
    lineColors: ["#009688", "#cdc6c6"],
    lineWidth: "3px",
    resize: true,
    redraw: true,
  });
}
function donutChart() {
  window.donutChart = Morris.Donut({
    element: "donut-chart",
    data: [
      { label: "Normal Oda", value: 50 },
      { label: "Klimalı Oda", value: 25 },
      { label: "Özel Oda", value: 5 },
      { label: "Çift yataklı oda", value: 10 },
      
    ],
    backgroundColor: "#f2f5fa",
    labelColor: "#009688",
    colors: ["#0BA462", "#39B580", "#67C69D", "#95D7BB"],
    resize: true,
    redraw: true,
  });
}
function pieChart() {
  var paper = Raphael("pie-chart");
  paper.piechart(100, 100, 90, [18.373, 18.686, 2.867, 23.991, 9.592, 0.213], {
    legend: [
      "Windows/Windows Live",
      "Server/Tools",
      "Online Services",
      "Business",
      "Entertainment/Devices",
      "Unallocated/Other",
    ],
  });
}
