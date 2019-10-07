import React, { useEffect } from 'react';
import styled from 'styled-components';
import StatisticBoxes from '../Statistics/StatisticBoxes';
import UserSection from './UserSection';
import EventSection from './EventSection';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/event';
import { loadUsers } from '../../actions/user';

const Dashboard = ({
  getEvents,
  loadUsers,
  event: { event, events },
  user: { users }
}) => {
  useEffect(() => {
    getEvents();
    loadUsers();
  }, []);

  return (
    <DashboardSection>
      <StatisticBoxes events={events.length} users={users.length} />
      <UserSection />
      <EventSection />
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
