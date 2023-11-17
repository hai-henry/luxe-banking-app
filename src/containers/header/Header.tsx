import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="luxe__header" id="home">
      <div className="luxe__header-content">
        <h1>Good Morning, Henry</h1>
        <div className="luxe__header-buttons">
          <button type="button">Transfer</button>
          <button type="button">Link</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
