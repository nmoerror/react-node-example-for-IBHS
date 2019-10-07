import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: inline-flex;
  width: 20%;
  border: none;
  margin: 2rem 1rem;
  padding: 0.8rem 0;
  background: ${props => props.bgColor};
  border-radius: 0.2rem;
  transition: 0.1s ease-out;

  img {
    display: inline-block;
    height: 2.5rem;
    margin: 0 0 0 1rem;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const BoxStats = styled.div`
  position: relative;
  margin: auto auto auto 1.4rem;
  color: white;

  &::after {
    font-size: 0.5rem;
    content: '${props => props.taxt}';
    display: block;
  }
`;

const StatisticBox = ({ bgColor, icon, text, number }) => {
  return (
    <Box bgColor={bgColor}>
      <img src={icon} alt='' />
      {number === 0 ? (
        <BoxStats taxt=''>...Loading</BoxStats>
      ) : (
        <BoxStats taxt={text}>{number}</BoxStats>
      )}
    </Box>
  );
};

export default StatisticBox;
