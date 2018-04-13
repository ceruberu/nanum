import React, { Component } from "react";
import "./Share.css";

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "self",
      title: "",
      tags: [],
      location: "",
      content: "",
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  render() {
    const { method } = this.state;
    return (
      <div className="container">
          <form className="shareForm">
            <h4>나눔 방법을 선택해주세요</h4>
            <div className="shareMethod">
              <input
                className="hiddenRadio"
                type="radio"
                id="self"
                name="method"
                value="self"
                checked={method === "self"}
                onChange={this.handleChange}
              />
              <label for="self" className="radioIcon">
                <i className="fas fa-hand-holding-heart" />
                직접수령
              </label>
              <input
                className="hiddenRadio"
                type="radio"
                id="package"
                name="method"
                value="package"
                checked={method === "package"}
                onChange={this.handleChange}
              />
              <label for="package" className="radioIcon">
                <i className="fas fa-parachute-box" />
                택배수령
              </label>
            </div>
            <div>
              <label for="title">제목:</label>
              <input type="text" value={this.state.title} />
            </div>

            <label for="title">태그:</label>
            <input type="text" value={this.state.title} />
            <label for="title">위치:</label>
            <input type="text" value={this.state.title} />
            <label for="title">내용:</label>
            <textarea value={this.state.title} />
            <input type="submit" value="게시" />
          </form>
      </div>
    );
  }
}

export default Share;
