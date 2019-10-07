import React, { Component } from 'react';
import StatisticBox from './StatisticBox';
import NewMembers from '../../assets/logos/confetti.svg';
import Vip from '../../assets/logos/vip.svg';
import MultipleUsers from '../../assets/logos/networking.svg';
import Events from '../../assets/logos/fireworks.svg';

const StatisticBoxes = ({ events, users }) => {
  return (
    <>
      <StatisticBox
        text='Total Users'
        icon={MultipleUsers}
        bgColor='rgba(60, 132, 255, 1)'
        number={users}
      />
      <StatisticBox
        text='New Members'
        icon={NewMembers}
        bgColor='rgba(103, 108, 178, 1)'
        number='0'
      />
      <StatisticBox
        text='Total Memberships'
        icon={Vip}
        bgColor='rgba(234, 175, 50, 1)'
        number='0'
      />
      <StatisticBox
        text='Total Events'
        icon={Events}
        bgColor='rgba(80, 80, 80, 1)'
        number={events}
      />
    </>
  );
};

export default StatisticBoxes;
