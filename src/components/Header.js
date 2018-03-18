import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Address from './Address';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
          <div className="headerTitle">나눔</div>
          <NavLink to="/" className="headerLink"> 받기 </NavLink>
          <NavLink to="/share" className="headerLink"> 나누기 </NavLink>
          <Address />
        </div>
    );
  }
}

export default Header;