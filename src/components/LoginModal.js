import React, { Component } from 'react';
import IconInput from './IconInput';

import './LoginModal.css';

class LoginModal extends Component {
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
      <div className="loginModal">
        <div className="socialLogins">
          <div className="facebookLogin">
            <i className="socialLogo fab fa-facebook-square" />
            페이스북 계정으로 로그인
          </div>
          <div className="googleLogin">
            <i className="socialLogo fab fa-google" />
            구글 계정으로 로그인
          </div>
        </div>
        <div className="separator">
          <span className="separatorText"> 또는 </span>
        </div>
        <form className="emailLoginForm">
          <IconInput 
            inputProps={{
              name: "email",
              type: "email",
              placeholder: "이메일 주소"
            }}
            value={this.state.email} 
            changeHandler={this.handleInputChange}
            iconClass="far fa-envelope fa-lg" />
          <IconInput 
            inputProps={{
              name: "password",
              type: "password",
              placeholder: "비밀번호",
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              title: "비밀번호는 문자, 숫자의 조합으로 최소 8자리를 사용해야 합니다"
            }}
            value={this.state.password}
            changeHandler={this.handleInputChange}
            iconClass="fas fa-lock fa-lg" />
          <div className="forgotPassword">
            비밀번호가 생각나지 않으세요?
          </div>
          <button type="submit" className="emailLogin">
            로그인
          </button>
          <div className="separator">
            <div className="separatorLine" />
          </div>
          <div className="toSignup">
            나눔 계정이 없으세요? 
            <span className="signupLink" onClick={() => openModal("signup")}>
              회원가입
            </span>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginModal;
