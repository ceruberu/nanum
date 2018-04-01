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
    const { name, changeHandler, inputType, inputPlaceholder, iconClass } = this.props;
    return (
      <div className={`inputContainer ${this.state.focused ? "focus" : ""}`} >
        <input 
          name={name}
          onChange={(event)=>changeHandler(event)}
          type={inputType} 
          placeholder={inputPlaceholder} 
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
