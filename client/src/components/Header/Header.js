import React from 'react';
import styled from 'styled-components';
import Notification from '../../assets/logos/notification.svg';
import User from '../../assets/logos/man-user.svg';
import Bubbles from '../Loader/Bubbles';

const Header = ({ dmin }) => {
  return (
    <HeaderSection>
      {dmin === null ? (
        <Bubbles />
      ) : (
        <Welcome className='success'>Welcome, {dmin} !</Welcome>
      )}
      <button>
        <img className='Notifications' src={User} alt='' />
      </button>
      <button>
        <img className='Notifications' src={Notification} alt='' />
        <span className='NotificationCount'>1</span>
      </button>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  overflow: hidden;
  height: 3.5rem;
  padding: 0.5rem 1rem 0rem 15rem;
  margin: 0;
  background: white;
  border-bottom: 1px solid #ddd;

  button {
    position: relative;
    float: right;
    height: 65%;
    margin-top: 0.4rem;
    background: none;
    outline: none;
    border: none;

    .NotificationCount {
      position: absolute;
      background: red;
      font-weight: 400;
      color: white;
      width: 1rem;
      height: 1rem;
      top: 0;
      right: 0;
      border-radius: 12rem;
      line-height: 1rem;
      transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
    &:hover {
      cursor: pointer;
      .NotificationCount {
        transform: scale(1.1);
      }
    }
    &:active {
      transform: translateY(1px);
    }
  }

  .Notifications {
    display: inline;
    height: 80%;
    align-self: center;
  }
`;

const Welcome = styled.h3`
  display: inline-block;
  padding: 0;
  margin: 0;
  font-size: 1.8rem;
  font-weight: 200;

  .success&::after {
    content: " Here're some statistics I've generated for you.";
    display: block;
    width: 100%;
    height: 0.4rem;
    font-size: 0.8rem;
    padding: 0;
    padding-left: 0.1rem;
    color: #555;
  }
`;

export default Header;
