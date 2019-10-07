import { USERS_LOADED, USERS_LOADING_FAILED } from '../actions/constants';

const initialState = { user: [], users: [], isLoading: true, error: {} };

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USERS_LOADED:
      return {
        ...state,
        users: payload,
        isLoading: false
      };
    case USERS_LOADING_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    default:
      return state;
  }
}
