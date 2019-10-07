import {
  EVENT_CREATED,
  EVENT_CREATION_FAILED,
  GET_EVENTS,
  GET_EVENTS_ERROR
} from '../actions/constants';

const initialState = {
  event: null,
  events: [],
  isLoading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return {
        ...state,
        events: payload,
        isLoading: false
      };
    case EVENT_CREATED:
      return {
        ...state,
        events: [...state.events, payload],
        isLoading: false
      };
    case GET_EVENTS_ERROR:
    case EVENT_CREATION_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    default:
      return state;
  }
}
