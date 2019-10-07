import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom'
              }
            }
          }
        ],

        chart: {
          foreColor: '#777'
        },

        labels: ['Present', 'Absent'],

        title: {
          text: "Last Event's Attendance (%)",
          align: 'left',
          style: {
            weight: '300',
            fontSize: '22px',
            color: '#666'
          }
        }
      },
      series: [80, 15]
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type='donut'
        width='100%'
      />
    );
  }
}

export default DonutChart;
