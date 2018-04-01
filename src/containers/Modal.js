import React, { Component } from 'react';
import LoginModal from '../components/LoginModal';
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
    const { modal, onCloseClick } = this.props;
    let modalComponent;
    if (modal === "login"){
      modalComponent = <LoginModal />
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
