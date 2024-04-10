import React, { useState, useEffect } from "react";
import ApexCharts from "apexcharts";

const ProgressCard = ({ analyzedDataProps }) => {

  let count1 = analyzedDataProps.moodBooster.count;
  let count2 = analyzedDataProps.motivated.count;
  let count3 = analyzedDataProps.feelingBlue.count;
  let count4 = analyzedDataProps.chill.count;
  let count5 = analyzedDataProps.upbeat.count;
  let count6 = analyzedDataProps.anger.count;

  let total = count1 + count2 + count3 + count4 + count5 + count6;

  let c1 = Math.floor((count1 * 100) / total);
  let c2 = Math.floor((count2 * 100) / total);
  let c3 = Math.floor((count3 * 100) / total);
  let c4 = Math.floor((count4 * 100) / total);
  let c5 = Math.floor((count5 * 100) / total);
  let c6 = Math.floor((count6 * 100) / total);

  console.log(
    "total: ",
    Math.ceil(+analyzedDataProps.moodBooster.count / total)
  );
  console.log("c3: ", typeof c3);

  // useEffect(() => {
      const getChartOptions = () => {
        return {
          series: [c1*4, c2*4, c3*4, c4*4, c5*4, c6*4],
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
            }
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
      //   plotOptions: {
      //     radialBar: {
      //       track: {
      //         background: "#fff",
      //       },
      //       dataLabels: {
      //         show: false,
      //       },
      //     },
      //     yaxis: {
      //       show: false,
      //       labels: {
      //         formatter: function (value) {
      //           return value + "%";
      //         },
      //       hollow: {
      //         margin: 0,
      //         size: "10%",
      //       },
      //     },
      //   },
      //   grid: {
      //     show: false,
      //     strokeDashArray: 4,
      //     padding: {
      //       left: 2,
      //       right: 2,
      //       top: -23,
      //       bottom: -20,
      //     },
      //   },
      //   labels: [
      //     "Mood Booster",
      //     "Motivated",
      //     "Feeling blue",
      //     "Chill",
      //     "Upbeat",
      //     "Anger",
      //   ],
      //   legend: {
      //     show: true,
      //     position: "right",
      //     fontFamily: "Inter, sans-serif",
      //   },
      //   tooltip: {
      //     enabled: true,
      //     x: {
      //       show: false,
      //     },
      //   },
      //   yaxis: {
      //     show: false,
      //     labels: {
      //       formatter: function (value) {
      //         return value + "%";
      //       },
      //     },
      //   },
      // };

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
    
  // }, [c1,c2,c3,c4,c5,c6]);

  return (
    <div className="w-full bg-gray-900 rounded-lg shadow h-96 overflow-hidden pt-6">
      {/* HTML content goes here */}
      <div className="" id="radial-chart"></div>
    </div>
  );
};

export default ProgressCard;
