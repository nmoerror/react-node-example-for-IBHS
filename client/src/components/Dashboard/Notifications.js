import React, { Component } from 'react';
import styled from 'styled-components';
import Close from '../../assets/logos/close.svg';

const ThisSection = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  background: white;
  padding: 1rem;

  li {
    position: relative;
    margin: 0.5rem 0;
    opacity: 0.6;

    &:hover .Dismiss {
      opacity: 1;
    }
    &:hover {
      cursor: pointer;
      opacity: 1;
      transform: translateX(0.1rem);
    }
  }

  .Dismiss {
    position: absolute;
    right: 0.5rem;
    width: 1.1rem;
    height: 1.1rem;
    opacity: 0;
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: #666;
`;

export class Notifications extends Component {
  state = {
    notifications: [
      'Someone Unknown has registered as administrator - 02/10/19'
    ]
  };

  render() {
    return (
      <ThisSection>
        <Title>Notifications</Title>
        <hr style={{ width: '98%' }} />

        {this.state.notifications.length > 0 ? (
          <ul>
            <li>{this.state.notifications}</li>
          </ul>
        ) : (
          <h4> Nothing to review :)</h4>
        )}
      </ThisSection>
    );
  }
}

export default Notifications;
