import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { NavLink } from 'react-router-dom';
import Address from '../components/Address';
import NavUser from '../components/NavUser';
import { userQuery } from '../graphql';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSearching: false
    };
  }

  componentDidUpdate(prevProps, prevState){
    if(!prevState.isSearching && this.state.isSearching){
      this.textInput.focus();
    }
  }

  clickSearch(){
    this.setState({
      isSearching: true
    })
  }

  clickBack(){
    this.setState({
      isSearching: false
    })
  }

  render() {
    const { userQuery, modalChange } = this.props;
    return [
      <div className="header" key="1234">
        <div className="headerTitle">나눔</div>
        <NavLink to="/" className="headerLink"> 받기 </NavLink>
        <NavLink to="/share" className="headerLink shareLink"> 나누기 </NavLink>
        <form className="search-container" show-input={`${this.state.isSearching}`}>
          <button type="button" className="back-button" onClick={()=>this.clickBack()}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <input 
            className="search-bar" 
            type="text" 
            ref={text => this.textInput = text}
            placeholder="Search" />
          <button className="search-button" onClick={()=>this.search()}>
            <i className="nav-search fa fa-search" />
          </button>
        </form>
        <button className="show-search-button" onClick={()=>this.clickSearch()}>
          <i className="nav-search fa fa-search"/>
        </button>
        <NavUser 
          isAuthenticated={userQuery.isAuthenticated}
          onOpenClick={modal => modalChange(modal)}   
        />
      </div>
      ,
      <div className="header-nav" key="123455">
        <div className="nav-icon"> 최신</div>
        <div className="nav-icon"> 인기</div>
        <Address />
      </div>
    ]
  }
};

export default compose(
  graphql(userQuery, { name: 'userQuery' })
)(Header);
