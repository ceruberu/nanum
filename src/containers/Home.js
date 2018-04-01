import React, { Component } from 'react';
import LinkCard from '../components/LinkCard';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <LinkCard />
      </div>
    );
  }
}

export default Home;
