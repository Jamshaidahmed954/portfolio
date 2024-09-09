import React, { useState } from "react";
import { useContext } from "react";
import { ThemContext } from "../Contexts/ThemContext";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { color } from "chart.js/helpers";

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: [
    "html5",
    "css3",
    "java script",
    "react js",
    "tailwind",
    "type script",
  ],
  datasets: [
    {
      label: "%",
      data: [97, 90, 70, 85, 73, 55],
      backgroundColor: [
        "rgba(255, 99, 132, )",
        "rgba(54, 162, 235, )",
        "rgba(255, 206, 86, )",
        "rgba(75, 192, 192, )",
        "rgba(153, 102, 255, )",
        "rgba(255, 159, 64, )",
      ],
      borderColor: [
        "rgba(255, 99, 132, 555)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],

      borderWidth: 1,
    },
  ],
};

function SkillChart() {
  const options = {
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Prevents the chart from maintaining the aspect ratio
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
      },
    },
    animation: {
      loop: false,
      duration: 2000, // Animation duration in milliseconds
      easing: "eas-in-out", // Easing function
      onComplete: () => {
        console.log("Animation complete");
      },
    },
  };

  return (
    <>
      <div className="w-full md:h-auto my-20   h-auto md:my-32 flex justify-center items-center ">
        <div className=" flex justify-center  items-center flex-col gap-10  relative w-[80%] md:w-[40%] h-[400px]  md:h-[600px] ">
          <h2 className="md:text-3xl text-2xl font-bold border-b-4  border-red-500  pb-2 ">
            Bar Chart of skills
          </h2>
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default SkillChart;
