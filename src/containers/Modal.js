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
    document.body.className = "";
  }

  render() {
    const { modal, onOpenClick, onCloseClick } = this.props;
    let modalComponent;
    if (modal === "login"){
      modalComponent = <LoginModal openModal={onOpenClick} />;
    } else if (modal === "signup"){
      modalComponent = <SignupModal openModal={onOpenClick} />;
    }

    return (
      <div className="modalWrapper" onClick={e => {
        if(e.target === e.currentTarget) {
          onCloseClick();
       }
      }}>
        <div className="modal">
          <div className="modalHeader">
            <button className="modalCloseButton" onClick={()=>onCloseClick()}>
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
