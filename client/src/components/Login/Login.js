import React from 'react';
import styled from 'styled-components';
import LoginItem from './LoginItem';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ThisSection = styled.div`
  width: 100%;
`;

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const Login = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <Redirect to='/Dashboard' />
      ) : (
        <ThisSection>
          <LoginItem />
        </ThisSection>
      )}
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func,
  isAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps)(Login);
