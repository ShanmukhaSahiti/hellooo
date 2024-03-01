import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

export default function BarChartWeekly({ weekData }) {
    let series;
    let options;
    const { datasets, labels } = weekData;
    if (datasets?.length > 1) {
        series= [{
          name: datasets[0].label,
          data: datasets[0].data
        }, {
            name: datasets[1].label,
            data: datasets[1].data
          }];
        options= {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10,
              dataLabels: {
                total: {
                  enabled: true,
                  style: {
                    fontSize: '13px',
                    fontWeight: 900
                  }
                }
              }
            },
          },
          xaxis: {
            categories: labels,
            title: {
                text: 'Day of the week'
            }
          },
          yaxis: {
            title: {
                text: 'Messages'
            }
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          }
        };
      
      
      return (
          <div id="chartWeek">
            <ReactApexChart options={options} series={series} type="bar" height={350} />
          </div>
      );
  }
}

BarChartWeekly.propTypes = {
    weekData: PropTypes.object.isRequired,
  };