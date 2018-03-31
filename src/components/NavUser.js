import React from 'react';
import { Link } from 'react-router-dom';
import UserDisplay from '../images/userDisplay.jpg';
import './NavUser.css';

const NavUser = (props) => {
  return props.isAuthenticated ?
    <div className="navUser">
      <img className="userDisplay" alt="Display" src={UserDisplay} />
      <span className="userName"> Duck Yeon Kim </span>
    </div>
  :     
    <div className="navUser">
      <Link to="/login" className="loginLink"> 로그인 </Link>
    </div>

};

export default NavUser;
