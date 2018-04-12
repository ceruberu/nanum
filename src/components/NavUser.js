import React from 'react';
import { graphql, compose } from 'react-apollo';
import { currentUserQuery } from '../graphql';
import './NavUser.css';


const NavUser = props => {
  const { currentUserQuery, onOpenClick } = props;


  if (currentUserQuery !== undefined){
    // The query is not Skipped
    if (currentUserQuery.networkStatus === 7){
      // The query is successful
      return (
        <div className="navUser">
          <img className="userDisplay" alt="Display" src={currentUserQuery.currentUserQuery.pictureUrl} />
        </div>
      );
    } else {
      return (
        <div className="navUser">
        </div>
      );
    }
  } else {
    // The User is not logged in and the query is skipped
    return (
      <div className="navUser">
        <div className="loginLink" onClick={()=>onOpenClick("login")}> 로그인 </div>
      </div>
    );
  }
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
