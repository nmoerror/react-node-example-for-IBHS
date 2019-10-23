import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StatisticBoxes from '../Statistics/StatisticBoxes';
import UserSection from './UserSection';
import EventSection from './EventSection';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/event';
import { loadUsers } from '../../actions/user';
import moment from 'moment';

const Dashboard = ({
  getEvents,
  loadUsers,
  event: { event, events },
  user: { users }
}) => {
  useEffect(() => {
    getEvents();
    loadUsers();
    preSetMonths();
  }, []);

  const [months, setMonths] = useState([]);

  const preSetMonths = () => {
    let a = moment().format('MMMM');
    let b = moment()
      .subtract(1, 'months')
      .format('MMMM');
    let c = moment()
      .subtract(2, 'months')
      .format('MMMM');
    let d = moment()
      .subtract(3, 'months')
      .format('MMMM');
    let e = moment()
      .subtract(4, 'months')
      .format('MMMM');

    setMonths([a, b, c, d, e]);
  };

  return (
    <DashboardSection>
      <StatisticBoxes events={events.length} users={users.length} />
      <UserSection months={months} users={users.length} />
      <EventSection months={months} />
    </DashboardSection>
  );
};

const DashboardSection = styled.div`
  overflow: auto;
  padding: 0 2.5rem 0 2.5rem;
  background: rgba(252, 252, 252, 1);
  color: #333;
`;

const mapStateToProps = state => ({
  event: state.event,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getEvents, loadUsers }
)(Dashboard);
