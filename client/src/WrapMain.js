import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { connect } from 'react-redux';

const WrapMain = ({ children, auth }) => {
  return (
    <>
      <SideBar />
      <Header dmin={auth.dmin && auth.dmin.name} />
      <main className='Main-Section'>{children}</main>
      <Footer />
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(WrapMain);
