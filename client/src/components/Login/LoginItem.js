import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SheSharp from '../../assets/logos/SheSharp 2.png';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const LoginItem = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Item>
      <TitleSection>
        <img src={SheSharp} alt='' />
        She Sharp
      </TitleSection>
      <form style={{ marginTop: '3rem' }} onSubmit={e => onSubmit(e)}>
        <label> Email</label>
        <input
          type='email'
          value={email}
          name='email'
          onChange={e => onChange(e)}
          required
        />
        <label>Password</label>
        <input
          type='password'
          value={password}
          name='password'
          onChange={e => onChange(e)}
          required
        />
        <div className='inline'>
          <input type='checkbox' />
          <label>Remember me</label>
        </div>
        <input type='submit' id='login-button' value='Sign in' />
      </form>
    </Item>
  );
};

const Item = styled.div`
  width: 18rem;
  height: 30rem;
  margin: auto;
  padding: 4rem;
  color: white;
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 0.6rem;
  }
`;

const TitleSection = styled.text`
  display: flex;
  font-size: 2.8rem;
`;

LoginItem.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginItem);
