import axios from 'axios';
import { DMINS_LOADED, DMINS_LOADING_FAILED } from './constants';

export const loadDmins = () => async dispatch => {
  try {
    const res = await axios.get('/api/dmin');
    dispatch({
      type: DMINS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DMINS_LOADING_FAILED,
      payload: { msg: err.response.textStatus, status: err.response.status }
    });
  }
};
