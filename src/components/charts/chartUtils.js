let width, height, gradient;
export const getGradient = (ctx, chartArea) => {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, CHART_COLORS.purple);
    gradient.addColorStop(0.5, CHART_COLORS.blue);
    gradient.addColorStop(1, CHART_COLORS.green);
  }

  return gradient;
};

export const CHART_COLORS = {
  red: 'rgba(255, 99, 132, .8)',
  orange: 'rgba(255, 159, 64, .8)',
  yellow: 'rgba(255, 205, 86, .8)',
  green: 'rgba(126, 227, 130, .8)',
  blue: 'rgba(54, 162, 235, .8)',
  purple: 'rgba(153, 102, 255, .8)',
  grey: 'rgba(201, 203, 207, .8)'
};
