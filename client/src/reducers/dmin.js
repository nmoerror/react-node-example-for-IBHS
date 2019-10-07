import { DMINS_LOADED, DMINS_LOADING_FAILED } from '../actions/constants';

const initialState = {
  dmins: [],
  dmin: null,
  isLoading: true,
  errors: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DMINS_LOADED:
      return {
        ...state,
        dmins: payload,
        isLoading: false
      };
    case DMINS_LOADING_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false
      };

    default:
      return state;
  }
}
