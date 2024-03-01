import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

export default function PieChart({ share }) {
  const { labels, datasets } = share;
  const series = datasets ? datasets[0].data : [];
  const options = {
    chart: {
      width: 280,
      type: 'pie',
    },

    // colors: ['#c76193c4', '#ffab00a3'],
    labels,
    legend: {
      show: false,
    },
    fill: {
      type: 'image',
      opacity: 1,
      image: {
        src: ['../../assets/images/Sahiti_pie.jpeg', '../../assets/images/Vamshi_pie.jpeg'],
        width: 25,
        imagedHeight: 25,
      },
    },
    stroke: {
      width: 4,
    },
    title: {
      text: 'Total Messages',
      align: 'center',
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#263238',
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#111'],
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        borderWidth: 0,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="pie" width={280} />
    </div>
  );
}

PieChart.propTypes = {
  share: PropTypes.object.isRequired,
};
