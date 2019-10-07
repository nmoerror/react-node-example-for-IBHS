import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event';
import { withRouter } from 'react-router-dom';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const ThisSection = styled.div`
  min-height: 90vh;
  background: white;
  padding: 2rem 1rem 1rem 2rem;

  label {
    color: black;
  }
`;

const NewEvent = ({ createEvent, history }) => {
  const [formData, setFormData] = useState({
    eventid: '',
    eventname: '',
    host: '',
    description: '',
    eventdate: '',
    eventtime: '',
    capacity: '',
    price: '',
    currently: true,
    location: '',
    location_id: ''
  });

  const {
    eventname,
    host,
    description,
    price,
    currently,
    capacity,
    eventdate,
    eventtime,
    location,
    location_id
  } = formData;

  useEffect(() => {
    setFormData({ ...formData, eventid: makeid(10) });
  }, []);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addDress = e => {
    setFormData({
      ...formData,
      location: e.description,
      location_id: e.place_id
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    createEvent(formData);
    history.push('/Event-summary');
  };

  return (
    <ThisSection>
      <form onSubmit={e => onSubmit(e)} style={{ width: '35rem' }}>
        <div className='halved'>
          <div className='rem14'>
            <label>Event name</label>
            <input
              type='text'
              name='eventname'
              value={eventname}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='rem14'>
            <label>Host</label>
            <input
              type='text'
              name='host'
              value={host}
              onChange={e => onChange(e)}
            />
          </div>
        </div>
        <label>Address</label>
        <GooglePlacesAutocomplete
          autocompletionRequest={{
            componentRestrictions: {
              country: 'nz'
            }
          }}
          placeholder=''
          onSelect={e => addDress(e)}
        />
        <label style={{ marginTop: '1.5rem' }}>Description</label>
        <textarea
          type='text'
          name='description'
          rows='5'
          value={description}
          onChange={e => onChange(e)}
        />
        <div className='halved'>
          <div className='rem14'>
            <label>Event Date</label>
            <input
              type='date'
              name='eventdate'
              value={eventdate}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='rem14'>
            <label>Event Time</label>
            <input
              type='time'
              name='eventtime'
              value={eventtime}
              onChange={e => onChange(e)}
              required
            />
          </div>
        </div>
        <div className='halved'>
          <div className='rem14'>
            <label>Capacity</label>
            <input
              className='rem14'
              type='number'
              step='any'
              min='0'
              name='capacity'
              value={capacity}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='rem14'>
            <label>Price</label>
            <input
              className='rem14'
              type='number'
              step='any'
              min='0'
              name='price'
              value={price}
              onChange={e => onChange(e)}
            />
          </div>
        </div>
        <div style={{ margin: 'auto', width: '100%' }}>
          <input type='submit' className='option-button' value='Add Speakers' />
        </div>
        <div style={{ margin: 'auto', width: '12rem' }}>
          <input type='submit' id='login-button' value='Create event' />
        </div>
      </form>
    </ThisSection>
  );

  function makeid(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
};

NewEvent.propTypes = {
  createEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  { createEvent }
)(withRouter(NewEvent));
