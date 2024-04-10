import React, { useState, useEffect } from "react";
import ApexCharts from "apexcharts";

const ProgressCard = () => {
  
  

  useEffect(() => {
    const getChartOptions = () => {
      return {
        series: [50, 85, 70, 90, 85, 70],
        colors: [
          "#fb923c",
          "#f17eb8",
          "#0ea5e9",
          "#6366f1",
          "#22c55e",
          "#e11d48",
        ],
        chart: {
          height: "360px",
          width: "100%",
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            track: {
              background: "#fff",
            },
            dataLabels: {
              show: false,
            },
            hollow: {
              margin: 0,
              size: "10%",
            },
          },
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -23,
            bottom: -20,
          },
        },
        labels: [
          "Mood Booster",
          "Motivated",
          "Feeling blue",
          "Chill",
          "Upbeat",
          "Anger",
        ],
        legend: {
          show: true,
          position: "right",
          fontFamily: "Inter, sans-serif",
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          labels: {
            formatter: function (value) {
              return value + "%";
            },
          },
        },
      };
    };

    if (
      document.getElementById("radial-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.querySelector("#radial-chart"),
        getChartOptions()
      );
      chart.render();
    }
  }, []);

  return (
    <div className="w-full bg-gray-900 rounded-lg shadow h-full">
      {/* HTML content goes here */}
      <div className="" id="radial-chart"></div>
    </div>
  );
};

export default ProgressCard;
