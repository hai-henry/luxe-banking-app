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
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar__sign">
        <p>Account</p>
      </div>
    </div>
  );
};

export default Navbar;
