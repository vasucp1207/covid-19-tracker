import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

const startDate = new Date(2020, 0, 1);
const labels = [];
for (let i = 0; i < 6; i++) {
  const date = moment(startDate)
    .add(i, "days")
    .format("YYYY-MM-DD");
  labels.push(date.toString());
}

const data = canvas => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 100, 0);
  return {
    backgroundColor: gradient,
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 3,
        fill: false,
        borderColor: "green"
      }
    ]
  };
};

export default function Linegraph() {
  return (
    <div className="App">
      <Line data={data} />
    </div>
  );
}