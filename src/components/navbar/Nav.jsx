import React from 'react'
import "./nav.scss"
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <div className="navbar">
      <img
        src={logo}
        alt="logo"
      />
        <span>need help? call 9876543210</span>
    </div>
  );
}

export default Nav