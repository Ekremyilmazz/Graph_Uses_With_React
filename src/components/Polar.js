import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  RadialLinearScale, 
  ArcElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';


import { polarAreaData } from '../data/data';


ChartJS.register(RadialLinearScale, ArcElement, Title, Tooltip, Legend);

export const PolarAreaChart = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Polar Area Chart Example',
      },
    },
  };

  return <PolarArea data={polarAreaData} options={options} />;
};
