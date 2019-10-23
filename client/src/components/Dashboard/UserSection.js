import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import Notifications from './Notifications';

const ThisSection = styled.div`
  margin: 0 0 3rem 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 3rem;

  .UserGraphSection {
    border: 1px solid #ccc;
    padding: 1rem;
    background: white;
  }
`;

const UserSection = ({ months, users }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    setStats({
      options: {
        chart: {
          foreColor: '#777'
        },
        plotOptions: {
          line: {
            curve: 'smooth'
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
          text: 'Recently Registered Users',
          align: 'left',
          style: {
            weight: '300',
            fontSize: '22px',
            color: '#666'
          }
        },
        colors: ['#3c84ff', '#676cb2', '#eaaf32'],
        xaxis: {
          categories: [
            `${months[4]}`,
            `${months[3]}`,
            `${months[2]}`,
            `${months[1]}`,
            `${months[0]}`
          ]
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      series: [
        {
          name: 'Total Users',
          data: [users / 2, users / 2, users, users, users]
        },
        {
          name: 'New Members',
          data: [0, 0, 0, 0, 4]
        },
        {
          name: 'Current Memberships',
          data: [0, 0, 0, 0, 0]
        }
      ]
    });
  }, [users, months]);

  return (
    <ThisSection>
      <div className='UserGraphSection'>
        {stats && (
          <Chart
            options={stats.options}
            series={stats.series}
            type='area'
            width='100%'
          />
        )}
      </div>
      <Notifications />
    </ThisSection>
  );
};

export default UserSection;
