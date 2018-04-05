import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { userSignup, authenticateFacebookUser } from '../graphql';
import IconInput from './IconInput';

import './SignupModal.css';

class SignupModal extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      email: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLocalSignup = this.handleLocalSignup.bind(this);
    this.handleFacebookSignup = this.handleFacebookSignup.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  async handleFacebookSignup(){
    const { FB } = window;
    const { authenticateFacebookUser } = this.props;
    
    FB.login( async(response) => {
      if (response.status === 'connected') {
        const { accessToken } = response.authResponse;
        const clientToken = await authenticateFacebookUser({
          variables: {
            facebookToken: accessToken
          }
        }).catch(err => {throw err});
        const token = clientToken.data.authenticateFacebookUser;
        localStorage.setItem('token', token);
        window.location.reload();
      } else if (response.status === 'not_authorized') {
        // the user is logged in to Facebook, 
        // but has not authenticated your app
      } else {
        // the user isn't logged in to Facebook.
      }
    }, {scope: 'public_profile,email'});
  }

  handleLocalSignup(e){
    e.preventDefault();
    this.props.userSignup({
      variables: {
        email: this.state.email
      }
    });
  }

  render(){
    const { modalChange } = this.props;
    
    return (
      <div className="signupModal">
        <div className="socialSignups">
          <div className="facebookSignup" onClick={this.handleFacebookSignup}>
            <i className="socialLogo fab fa-facebook-square" />
            페이스북 계정으로 회원가입
          </div>
          <div className="googleSignup">
            <i className="socialLogo fab fa-google" />
            구글 계정으로 회원가입
          </div>
        </div>
        <div className="separator">
          <span className="separatorText"> 또는 </span>
        </div>
          <form 
            className="emailSignupForm" 
            onSubmit={this.handleLocalSignup}
          >
            <IconInput 
              inputProps={{
                name: "email",
                type: "email",
                placeholder: "이메일 주소"
              }}
              value={this.state.email} 
              changeHandler={this.handleInputChange}
              iconClass="far fa-envelope fa-lg" />
            <button type="submit" className="emailSignup">
              이메일로 회원가입 링크 보내기
            </button>
          </form>
        <div className="separator">
          <div className="separatorLine" />
        </div>
        <div className="toLogin">
          이미 나눔 계정이 있으세요?
          <span className="loginButton" onClick={() => modalChange("login")}>
            로그인
          </span>
        </div>

      </div>
    );
  }
};

export default compose(
  graphql(authenticateFacebookUser, { name: 'authenticateFacebookUser' }),
  graphql(userSignup, { name: 'userSignup' })
)(SignupModal);
