import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__content">
        <h1>Good Morning, Henry</h1>
        <div className="header__buttons">
          <button type="button">Transfer</button>
          <button type="button">Link</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
