import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import IconInput from '../components/IconInput';
import { activateUser } from '../graphql';

import './Activate.css';

class Activate extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      username: null,
      error: null,
      redirect: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event){
    const target = event.target;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event){
    event.preventDefault();
    try {
      await this.props.activateUser({
        variables: {
          username: this.state.username
        }
      })
      this.setState({redirect: true});
    } catch (err) {
      console.log("ERR", err);
      this.setState({err: err});
    }
    
  }

  render(){
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/' />;
    }

    return (
      <div className="container">
        <div className="authenticateWrapper">
          거의 다 되었습니다, 닉네임을 설정 해주세요
          <form 
            className="authenticationForm"
            onSubmit={this.handleSubmit}
          >
            <IconInput 
              inputProps={{
                name: "username",
                type: "text",
                placeholder: "별명"
              }}
              inputError={this.state.usernameError}
              value={this.state.username} 
              changeHandler={this.handleInputChange}
              iconClass="fas fa-at fa-lg" />
            <button type="submit">
              닉네임 설정
            </button>
          </form>

        </div>
      </div>
    );
  }
  
};

export default compose(
  graphql(activateUser, {
    name: 'activateUser'
  })
)(Activate);
