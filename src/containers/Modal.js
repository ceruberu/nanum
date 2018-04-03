import React, { Component } from 'react';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';
import './Modal.css';

// const Modal = ({ modal }) => {
class Modal extends Component {
  componentDidMount(){
    document.body.className = "modalOpen";
  }

  componentWillUnmount(){
    document.body.className = document.body.className.replace("modalOpen", "");
  }

  render() {
    const { modal, modalChange } = this.props;
    let modalComponent;

    if (modal === "login"){
      modalComponent = <LoginModal modalChange={input => modalChange(input)} />;
    } else if (modal === "signup"){
      modalComponent = <SignupModal modalChange={input => modalChange(input)} />;
    }

    return (
      <div className="modalWrapper" onClick={e => {
        if(e.target === e.currentTarget) {
          modalChange(false);
       }
      }}>
        <div className="modal">
          <div className="modalHeader">
            <button className="modalCloseButton" onClick={()=>modalChange(false)}>
              <i className="fas fa-times fa-lg" />
            </button>
          </div>
          { modalComponent }
        </div>
      </div>
    );
  }
}

export default Modal;
