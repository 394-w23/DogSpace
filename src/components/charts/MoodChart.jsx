import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getGradient } from './chartUtils';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
  scales: {
    x: {
      type: 'linear',
      min: 0,
      max: 12,
      ticks: {
        stepSize: 6,
        // usePointStyle: true
        callback: function (val, index) {
          // Hide every 2nd tick label
          return '😀';
        }
      }
    }
  },
  plugins: {
    datalabels: {
      display: false
    }
  }
};

export const MoodChart = () => {
  const data = {
    labels: [0, 1, 2, 3, 4, 5, 8, 11, 12],

    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, 55, 23, 96, 55, 23, 96, 55, 55],
        borderColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
        borderWidth: 9,
        lineTension: 0.3,
        pointRadius: 0
      }
    ]
  };

  return (
    <div style={{ marginTop: 100, width: 1000, height: 700 }}>
      <Line data={data} options={options} />
    </div>
  );
};
