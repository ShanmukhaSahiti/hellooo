
import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class SharePieChart extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [22168, 17830],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          colors: ['#c76193c4', '#ffab00a3'],
          labels:["Bujjamma", "Vamshi"],
          fill: {
            type: 'image',
            opacity: 1,
            image: {
               src: ['../../assets/images/Shammy_pie.jpeg', '../../assets/images/Vamshi_pie.jpeg'],
              width: 25,
              imagedHeight: 25
            },
          },
          stroke: {
            width: 4
          },
          dataLabels: {
            enabled: true,
            style: {
              colors: ['#111']
            },
            background: {
              enabled: true,
              foreColor: '#fff',
              borderWidth: 0
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
     const {options, series} = this.state;
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={options} series={series} type="pie" width={380} />
          </div>
          <div id="html-dist" />
        </div>
      );
    }
  }

  export default SharePieChart;