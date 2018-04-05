import React from 'react';
import { graphql, compose } from 'react-apollo';
import { currentUserQuery } from '../graphql';
import './NavUser.css';


const NavUser = props => {
  const { currentUserQuery, onOpenClick } = props;
  console.log("CURRENTUSERQUERY::", currentUserQuery);
  if(currentUserQuery && currentUserQuery.loading){
    return (
      <div className="navUser">
      </div>
     );
  }

  return currentUserQuery === undefined ? 
    <div className="navUser">
      <div className="loginLink" onClick={()=>onOpenClick("login")}> 로그인 </div>
    </div>
  : 
    <div className="navUser">
      <img className="userDisplay" alt="Display" src={currentUserQuery.currentUserQuery.pictureUrl} />
    </div>
};

export default compose(
  graphql(currentUserQuery, { 
    name: 'currentUserQuery',
    options: {
      variables: {
        token: localStorage.getItem('token')
      }
    },
    skip: () => !localStorage.getItem('token'),
  })
)(NavUser);
