import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './SideBar.css';
import Logo from '../../assets/logos/SheSharp 2.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const SideBar = ({ logout }) => {
  const [active, setActive] = useState('Dashboard');
  const [activedrop, setActiveDrop] = useState('');

  const handleLogout = () => {
    logout();
  };

  const handleActive = name => {
    setActive(name);
    setActiveDrop('');
  };

  return (
    <MenuSection>
      <div className='Logo-Space'>
        <img src={Logo} alt='' />
        <span className='Logo-Description'> S#. Management </span>
      </div>
      <Link to='/Dashboard'>
        <button
          onClick={() => handleActive('Dashboard')}
          className={`Menu-Button ${active === 'Dashboard' ? 'active' : ''}`}
        >
          Dashboard
        </button>
      </Link>
      <span className='Menu-Title'>Manage</span>
      <Link to='/Roles'>
        <button
          onClick={() => handleActive('Roles')}
          className={`Menu-Button ${active === 'Roles' ? 'active' : ''}`}
        >
          Roles
        </button>
      </Link>
      <Link to='/Users'>
        <button
          onClick={() => handleActive('Users')}
          className={`Menu-Button ${active === 'Users' ? 'active' : ''}`}
        >
          Users
        </button>
      </Link>
      <div className='Drop'>
        <button
          onClick={() => setActive('Events')}
          className={`Menu-Button Drop-Down ${
            active === 'Events' ? 'Plus active SignClown' : 'Sign'
          }`}
        >
          Events
        </button>
        <div className='Drop-Down-Content'>
          <Link to='/Event-summary'>
            <button
              onClick={() => setActiveDrop('Event-summary')}
              className={`Menu-Button Indented ${
                activedrop === 'Event-summary' ? 'active-drop' : ''
              }`}
            >
              Summary
            </button>
          </Link>
          <Link to='/New-event'>
            <button
              onClick={() => setActiveDrop('New-event')}
              className={`Menu-Button Indented ${
                activedrop === 'New-event' ? 'active-drop' : ''
              }`}
            >
              New Event
            </button>
          </Link>
        </div>
      </div>

      <div className='Down'>
        <Link to='/Settings'>
          <button
            onClick={() => setActive('Settings')}
            className={`Menu-Button ${active === 'Settings' ? 'active' : ''}`}
          >
            Settings
          </button>
        </Link>
        <Link to='/'>
          <button onClick={() => handleLogout()} className='Menu-Button'>
            Logout
          </button>
        </Link>
      </div>
    </MenuSection>
  );
};

const MenuSection = styled.div`
  position: fixed;
  padding: 1rem 0 0 0;
  margin: 0;
  height: 100%;
  width: 14rem;
  background: rgba(25, 25, 25, 1);
  color: white;
  a {
    text-decoration: none;
  }
`;

SideBar.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  { logout }
)(SideBar);
