import React, { Component } from 'react';
import IconInput from './IconInput';

import './SignupModal.css';

class SignupModal extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      email: null,
      password: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  render(){
    const { openModal } = this.props;

    return (
      <div className="signupModal">
        <div className="socialSignups">
          <div className="facebookSignup">
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
        <form className="emailSignupForm">
          <IconInput 
            name="email"
            value={this.state.email} 
            changeHandler={this.handleInputChange}
            inputType="email" 
            inputPlaceholder="이메일 주소" 
            iconClass="far fa-envelope fa-lg" />
          <button type="submit" className="emailSignup">
            이메일로 회원가입 링크 보내기
          </button>
          <div className="separator">
            <div className="separatorLine" />
          </div>
          <div className="toLogin">
            이미 나눔 계정이 있으세요?
            <span className="loginButton" onClick={() => openModal("login")}>
              로그인
            </span>
          </div>
        </form>
      </div>
    );
  }
};

export default SignupModal;
