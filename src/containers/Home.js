import React, { Component } from 'react';
import LinkCard from '../components/LinkCard';

import './Home.css';

class Home extends Component {
  componentDidMount(){
    window.addEventListener('scroll', (e)=>console.log(window.scrollY, window.innerHeight, window.outerHeight));
  }
  render() {
    return (
      <div className="container">
        <LinkCard />
      </div>
    );
  }
}

export default Home;
