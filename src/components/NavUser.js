import React from 'react';
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
      <div className="loginLink" onClick={()=>props.onLoginClick("login")}> 로그인 </div>
    </div>

};

export default NavUser;
