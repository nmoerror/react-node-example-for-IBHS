import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Close from '../../assets/logos/close.svg';
import Search from '../../assets/logos/search.svg';
import Bubbles from '../Loader/Bubbles';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/user';
import moment from 'moment';

const ThisSection = styled.div`
  min-height: 90vh;
  padding: 1rem;
  background: white;
  img {
    display: flex;
    width: 1rem;
    margin: auto;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Title = styled.text`
  font-size: 1.6rem;
  font-weight: 200;
  color: #444;
`;

const Users = ({ loadUsers, user: { users }, isLoading }) => {
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <ThisSection>
      <Title>Registered Users</Title>
      <table className='Table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Date Registered</th>
            <th scope='col'>Type</th>
            <th scope='col' style={{ textAlign: 'center' }}>
              Remove
            </th>
          </tr>
        </thead>
        {users.length === 0 ? (
          <Bubbles />
        ) : (
          <tbody>
            {users.map((single, idx) => (
              <tr key={idx}>
                <th scope='row'>{idx}</th>
                <td>{single.name}</td>
                <td>{single.email}</td>
                <td>{moment(single.date).format('LL')}</td>
                <td>Basic</td>
                <td>
                  <img alt='' src={Close} />
                </td>
                <td>
                  <img alt='' src={Search} />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </ThisSection>
  );
};

Users.propTypes = {
  loadUsers: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.user,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { loadUsers }
)(Users);
