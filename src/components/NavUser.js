import React, { Component } from 'react';
import UserDisplay from '../images/userDisplay.jpg';
import './NavUser.css';

class NavUser extends Component {
  render() {
    return (
      <div className="navUser">
        <img className="userDisplay" alt="Display" src={UserDisplay} />
        <span className="userName"> Duck Yeon Kim </span>
      </div>
    );
  }
}

export default NavUser;
