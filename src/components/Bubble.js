import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// data.js dosyasından veriyi import ediyoruz
import { bubbleData } from '../data/data';

// Chart.js modüllerini kaydediyoruz
ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export const BubbleChart = () => {
  const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
      title: {
        display: true,
        text: 'Bubble Chart',
      },
      tooltip: {
        callbacks: {
          // Tooltip içeriği özelleştirilmiş
          label: function (tooltipItem) {
            return `x: ${tooltipItem.raw.x}, y: ${tooltipItem.raw.y}, size: ${tooltipItem.raw.r}`;
          },
        },
      },
    },
    scales: {
      x: {
        min: 0,  // x ekseni için minimum değer
        max: 100, // x ekseni için maksimum değer
      },
      y: {
        min: 0,  // y ekseni için minimum değer
        max: 100, // y ekseni için maksimum değer
      },
    },
  };

  return <Bubble data={bubbleData} options={options} />;
};


