import React, { Component } from 'react';
import Card from '../components/Card';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-container">
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
