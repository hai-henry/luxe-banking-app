import React, { useState, useEffect } from 'react'
import './Header.css'
import { LinkPlaid } from '../../components'

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__content">
        <h1>Good Morning, Henry</h1>
        <div className="header__buttons">
          <button type="button">Transfer</button>
          <button type="button">Link</button>
          <LinkPlaid />
        </div>
      </div>
    </div>
  )
}

export default Header
