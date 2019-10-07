import React from 'react';
import styled from 'styled-components';

const BubblesContainer = styled.div`
  background: rgba(0, 0, 0, 0);
  margin: auto;

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 50px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 22px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #333;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`;

const Bubbles = () => {
  return (
    <BubblesContainer>
      <div className='lds-ellipsis'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </BubblesContainer>
  );
};

export default Bubbles;
