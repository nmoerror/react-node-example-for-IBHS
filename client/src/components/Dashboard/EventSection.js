import React, { Component } from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import DonutChart from './DonutChart';

const ThisSection = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 3rem;

  .Description {
    padding: 1rem;
  }
  .Graphic {
    background: white;
    padding: 1rem;
    border: 1px solid #ccc;
  }
`;

export class EventSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          foreColor: '#777'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '25%',
            endingShape: 'rounded'
          }
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Recent Events',
          align: 'left',
          style: {
            weight: '300',
            fontSize: '22px',
            color: '#666'
          }
        },
        yaxis: {
          title: {
            text: 'Totals'
          }
        },
        xaxis: {
          categories: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5']
        }
      },
      fill: {
        opacity: 1
      },
      series: [
        {
          name: 'No. of Tickets',
          data: [100, 150, 50, 100, 100]
        },
        {
          name: 'Sold',
          data: [60, 80, 40, 55, 95]
        },
        {
          name: 'Present',
          data: [50, 80, 40, 30, 80]
        },
        {
          name: 'Absent',
          data: [10, 0, 0, 25, 15]
        }
      ]
    };
  }

  render() {
    return (
      <ThisSection>
        <div className='Graphic'>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='bar'
            width='100%'
          />
        </div>
        <div className='Graphic'>
          <DonutChart />
        </div>
        <div className='Graphic'>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='area'
            width='100%'
          />
        </div>
        <div className='Description'>
          Summary of all Events:
          <br />
          <br />
          Average Event Cap: 124 spots
          <br />
          Sold Rate: 60%
          <br />
          Attendance Rate: 78%
          <br />
          Best Anticipation: 14 days.
        </div>
      </ThisSection>
    );
  }
}

export default EventSection;
