import { Chart as ChartJS, BarElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, ChartDataLabels);
const options = {
  plugins: {
    datalabels: {
      anchor: 'end',
      align: 'top',
      formatter: Math.round,
      font: {
        weight: 'bold'
      }
    }
  }
};
export const IssuesChart = () => {
  const data = {
    labels: [0, 1, 2, 3, 4, 5, 8, 11, 12],

    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, 55, 23, 96, 55, 23, 96, 55, 55],
        backgroundColor: '#D0C9FF',
        borderWidth: 0,
        borderRadius: 20
      }
    ]
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};
