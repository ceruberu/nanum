import React from "react";
import { graphql, compose } from "react-apollo";
import { Link } from "react-router-dom";
import { currentUserQuery } from "../graphql";
import "./NavUser.css";

const NavUser = props => {
  const { currentUserQuery } = props;

  if (currentUserQuery !== undefined) {
    // The query is not Skipped
    if (currentUserQuery.networkStatus === 7) {
      // The query is successful
      return (
        <div className="navUser">
          <img
            className="userDisplay"
            alt="Display"
            src={currentUserQuery.currentUserQuery.pictureUrl}
          />
        </div>
      );
    } else {
      return <div className="navUser" />;
    }
  } else {
    // The User is not logged in and the query is skipped
    return (
      <div className="navUser">
        <Link className="loginLink" to="auth/signin">
          로그인
        </Link>
      </div>
    );
  }
};

export default compose(
  graphql(currentUserQuery, {
    name: "currentUserQuery",
    skip: () => !localStorage.getItem("token")
  })
)(NavUser);
