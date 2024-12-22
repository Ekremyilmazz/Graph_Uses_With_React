import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';


import { scatterData } from '../data/data';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export const ScatterChart = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Scatter Chart Example',
      },
    },
  };

  return <Scatter data={scatterData} options={options} />;
};

