import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Modal from './containers/Modal';
import Home from './containers/Home';
import Share from './containers/Share';
import { currentUserQuery, modalQuery, modalChange } from './graphql';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.onModalChange = this.onModalChange.bind(this);
  }

  componentDidMount(){
    this._initializeFacebookSDK();
  }

  _initializeFacebookSDK(){
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '223070234913907',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.12'
      });
    };

    // Load the SDK asynchronously
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  
  onModalChange(modal){
    this.props.modalChange({
      variables: {
        modal
      }
    });
  }

  render(){
    const { 
      // currentUserQuery, 
      modalQuery 
    } = this.props;
    
    return (
      <div className="App">
        <Header 
          modalChange={modal => this.onModalChange(modal)}
        />
        <Route exact path="/" component={Home}/>
        <Route path="/share" component={Share}/>
        {
          modalQuery.modal 
          && 
          <Modal 
            modal={modalQuery.modal} 
            modalChange={modal => this.onModalChange(modal)}
          />
        }
      </div>
    );
  }
}

export default compose(
  graphql(currentUserQuery, { 
    name: 'currentUserQuery',
    options: {
      variables: {
        token: localStorage.getItem('token')
      }
    },
    skip: () => !localStorage.getItem('token'),
  }),
  graphql(modalQuery, { name: 'modalQuery' }),
  graphql(modalChange, { name: 'modalChange' })
)(App);
