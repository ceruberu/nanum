import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Address from '../components/Address';
import NavUser from '../components/NavUser';
import { openModal } from '../actions/modalAction';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);
    console.log("PROPS:: ",props);
    this.state = {
      isSearching: false
    };
    console.log("STATE::", this.state);
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
    const { user, onLoginClick } = this.props;
    console.log("MAP DISAPTCH::", this.props);
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
          isAuthenticated={user.isAuthenticated}
          onLoginClick={modal => onLoginClick(modal)}   
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
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginClick: (modal) => {
      dispatch(openModal(modal));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
