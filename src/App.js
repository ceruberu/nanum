import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Share from './containers/Share';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Route exact path="/" component={Home}/>
    <Route path="/share" component={Share}/>
    <Footer />
  </div>
)

export default App;
