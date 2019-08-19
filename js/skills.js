"use strict";

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  responsive: true,

  title:{
    text:""
  },
  axisX:{
    interval: 1
  },
  axisY2:{
    interlacedColor: "#a1a5be",
    gridColor: "#FFFFFF", //Color lines
    title: ""
  },
  data: [{
    type: "bar",
    name: "skill",
    axisYType: "secondary",
    color: "#3c415e",
    dataPoints: [
      { y: 100, label: "Java" },
      { y: 60, label: "HTML" },
      { y: 20, label: "JavaScript" },
      { y: 70, label: "Python" },
      { y: 80, label: "SQL" }
    ]
  }]
});
chart.render();

}