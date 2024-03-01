import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

export default function BarChart({ hourlyData }) {
  let series;
  let options;
  const { datasets, labels } = hourlyData;
  if (datasets?.length > 1) {
    series = [
      {
        name: datasets[0].label,
        data: datasets[0].data,
      },
      {
        name: datasets[1].label,
        data: datasets[1].data,
      },
    ];
    options = {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50
      },
      xaxis: {
        categories: labels,
        title: {
            text: 'Time of the day'
        }
      },
      yaxis: {
        title: {
          text: 'Messages',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter(val) {
            return `${val}`;
          },
        },
      },
    };

    return (
      <div id="barChart">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    );
  }
}

BarChart.propTypes = {
  hourlyData: PropTypes.object.isRequired,
};
