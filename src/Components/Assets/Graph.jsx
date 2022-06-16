import React, { useState, useEffect } from 'react'
import "./graph.css"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const Graph = ({ balance,showcoins }) => {

  const data = {
    labels: [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',

    ],
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#3773f5',
        borderColor: '#3773f5',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#3773f5',
        pointBackgroundColor: '#3773f5',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#3773f5',
        pointHoverBorderColor: '#3773f5',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 1,
        data: showcoins.map(coin => coin.price),
      } 
    ]
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div className='graph'>
      <p> Portfolio Balance </p>
      <p id='graph_p'>$ {balance}.00</p>

      <Line data={data} options={options} width={400} height={150} />
    </div>
  )
}

export default Graph