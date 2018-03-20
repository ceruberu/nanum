import React, { Component } from 'react';
import Card from '../components/Card';
import Address from '../components/Address';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav-filter">
          <div className="nav-icon"> 최신</div>
          <div className="nav-icon"> 인기</div>
          <Address />
        </div>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />            
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
