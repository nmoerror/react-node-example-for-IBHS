import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

//Styling
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Routes
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Users from './components/Users/Users';
import EventSummary from './components/Events/EventSummary';
import NewEvent from './components/Events/NewEvent';
import Roles from './components/Roles/Roles';
import Settings from './components/Settings/Settings';
import NewGallery from './components/Gallery/NewGallery';
import ManageGallery from './components/Gallery/ManageGallery';
import GallerySummary from './components/Gallery/GallerySummary';
import WrapMain from './WrapMain';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <WrapMain>
            <PrivateRoute path='/Dashboard' exact component={Dashboard} />
            <PrivateRoute path='/Users' component={Users} />
            <PrivateRoute path='/Event-summary' component={EventSummary} />
            <PrivateRoute path='/New-event' component={NewEvent} />
            <PrivateRoute path='/Roles' component={Roles} />
            <PrivateRoute path='/New-gallery' component={NewGallery} />
            <PrivateRoute path='/Manage-gallery' component={ManageGallery} />
            <PrivateRoute path='/Gallery-summary' component={GallerySummary} />
            <PrivateRoute path='/Settings' component={Settings} />
          </WrapMain>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
