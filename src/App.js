import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { withRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home";
import Share from "./containers/Share";
import Login from "./containers/Login";
import Register from "./containers/Register";

// import Activate from './containers/Activate';
import { currentUserQuery } from "./graphql";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this._initializeFacebookSDK();
  }

  _initializeFacebookSDK() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: "223070234913907",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v2.12"
      });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  render() {
    const { location } = this.props;

    return (
      <div className="App">
        {location.pathname.split("/")[1] !== "auth" && <Header />}
        <Route exact path="/" component={Home} />
        <Route path="/share" component={Share} />
        <Route path="/auth/signin" component={Login} />
        <Route path="/auth/signup" component={Register} />
      </div>
    );
  }
}

export default compose(
  withRouter,
  graphql(currentUserQuery, {
    name: "currentUserQuery",
    skip: () => !localStorage.getItem("token")
  })
)(App);
