import React, { Component } from 'react';
import './IconInput.css';

class IconInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      focused: false
    }
  }

  render() {
    const { inputProps, changeHandler, iconClass, inputError } = this.props;
    
    return (
      <div className={`inputContainer ${inputError? "error" : this.state.focused ? "focus" : ""}`} >
        <input 
          required
          onChange={(event)=>changeHandler(event)}
          { ...inputProps }
          onFocus={() => {
            this.setState({
              focused: true
            })
          }}
          onBlur={() => {
            this.setState({
              focused: false
            })
          }}
        />
        <div className="inputIcon"><i className={iconClass}></i></div>
      </div>
    );
  }
}

export default IconInput;
