import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Modal from './containers/Modal';
import Home from './containers/Home';
import Share from './containers/Share';
import { modalQuery, modalChange } from './graphql';
import './App.css';

const App = ({ modalQuery, modalChange }) => {

  const onModalChange = (modal) => {
    modalChange({
      variables: {
        modal
      }
    });
  };

  return (
    <div className="App">
      <Header 
        modalChange={modal => onModalChange(modal)}
      />
      <Route exact path="/" component={Home}/>
      <Route path="/share" component={Share}/>
      {
        modalQuery.modal 
        && 
        <Modal 
          modal={modalQuery.modal} 
          modalChange={modal => onModalChange(modal)}
        />
      }
    </div>
  );
};

export default compose(
  graphql(modalQuery, { name: 'modalQuery' }),
  graphql(modalChange, { name: 'modalChange' })
)(App);
