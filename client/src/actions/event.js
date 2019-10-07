import axios from 'axios';
import {
  EVENT_CREATED,
  EVENT_CREATION_FAILED,
  GET_EVENTS,
  GET_EVENTS_ERROR
} from './constants';

//Create or Update

export const createEvent = (formData, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post('/api/event', formData, config);

    dispatch({
      type: EVENT_CREATED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_CREATION_FAILED,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all events
export const getEvents = () => async dispatch => {
  try {
    const res = await axios.get('/api/event');

    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
