import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from './actions/modalAction';
import Header from './components/Header';
import Modal from './containers/Modal';
import Home from './containers/Home';
import Share from './containers/Share';
import './App.css';

const App = ({ modal, onCloseClick }) => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/share" component={Share}/>
      {
        modal.component && <Modal modal={modal.component} onCloseClick={()=>onCloseClick()}/>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.modal
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseClick: () => {
      dispatch(closeModal());
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
