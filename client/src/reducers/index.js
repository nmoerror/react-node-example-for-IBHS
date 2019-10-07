import { combineReducers } from 'redux';
import auth from './auth';
import event from './event';
import user from './user';
import dmin from './dmin';

const appReducer = combineReducers({
  auth,
  event,
  user,
  dmin
});

export default (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};
