import axios from 'axios';
import { USERS_LOADED, USERS_LOADING_FAILED } from './constants';

export const loadUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users');
    dispatch({
      type: USERS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USERS_LOADING_FAILED,
      payload: { msg: err.response.textStatus, status: err.response.status }
    });
  }
};
