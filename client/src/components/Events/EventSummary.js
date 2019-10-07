import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/event';
import styled from 'styled-components';
import Bubbles from '../Loader/Bubbles';
import moment from 'moment';

const ThisSection = styled.div`
  min-height: 90vh;
  padding: 1rem;
  background: white;
`;

const Title = styled.text`
  font-size: 1.6rem;
  font-weight: 200;
  color: #444;
`;

const EventSummary = ({ getEvents, event: { event, events }, isLoading }) => {
  useEffect(() => {
    getEvents();
  }, [events]);

  return (
    <ThisSection>
      <Title>All Events</Title>
      <table className='Table'>
        <thead>
          <tr>
            <th scope='col'>Event Name</th>
            <th scope='col'>Status</th>
            <th scope='col'>Event Date</th>
            <th scope='col'>Price (nzd)</th>
          </tr>
        </thead>
        {events.length === 0 ? (
          <Bubbles />
        ) : (
          <tbody>
            {!isLoading &&
              events
                .sort(function(a, b) {
                  return new Date(b.date) - new Date(a.date);
                })
                .map((event, idx) => (
                  <tr
                    className={event.currently ? 'current-event' : ''}
                    key={idx}
                  >
                    <td>{event.eventname}</td>
                    <td>{event.currently ? 'Current' : 'Past'}</td>
                    <td>{moment(event.eventdate).format('LLL')}</td>
                    <td>${event.price}</td>
                  </tr>
                ))}
          </tbody>
        )}
      </table>
    </ThisSection>
  );
};

EventSummary.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  event: state.event,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { getEvents }
)(EventSummary);
