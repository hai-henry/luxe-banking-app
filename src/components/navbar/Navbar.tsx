import React from 'react';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
    <p>
      <a href="#home">Accounts</a>
    </p>
    <p>
      <a href="#transactions">Transactions</a>
    </p>
    <p>
      <a href="#documents">Documents</a>
    </p>
    <p>
      <a href="#resources">Resources</a>
    </p>
    <p>
      <a href="#help">Help</a>
    </p>
  </>
);

const Navbar = () => {
  return (
    <div className="luxe__navbar">
      <div className="luxe__navbar-links">
        <div className="luxe__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="luxe__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="luxe__navbar-sign">
        <p>Account</p>
      </div>
    </div>
  );
};

export default Navbar;
