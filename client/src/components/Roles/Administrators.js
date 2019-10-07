import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Close from '../../assets/logos/close.svg';
import Edit from '../../assets/logos/edit.svg';
import { connect } from 'react-redux';
import { loadDmins } from '../../actions/dmin';
import moment from 'moment';

const ThisSection = styled.div`
  img {
    display: flex;
    width: 1rem;
    margin: auto;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Administrators = ({ loadDmins, dmin: { dmins }, isLoading }) => {
  useEffect(() => {
    loadDmins();
  }, []);

  return (
    <ThisSection>
      <table className='Table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Days as Admin</th>
            <th scope='col'>Specific Role</th>
            <th scope='col' style={{ textAlign: 'center' }}>
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {dmins.map((single, idx) => (
            <tr key={idx}>
              <th scope='row'>{idx}</th>
              <td>{single.name}</td>
              <td>{single.email}</td>
              <td>{single.phone}</td>
              <td>{moment(single.Date).fromNow(true)}</td>
              <td>{single.role}</td>
              <td>
                <img alt='' src={Close} />
              </td>
              <td>
                <img alt='' src={Edit} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ThisSection>
  );
};

const mapStateToProps = state => ({
  dmin: state.dmin
});

Administrators.propTypes = {
  loadDmins: PropTypes.func.isRequired,
  dmin: PropTypes.object
};

export default connect(
  mapStateToProps,
  { loadDmins }
)(Administrators);
