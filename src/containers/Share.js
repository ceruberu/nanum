import React, { Component } from 'react';
import './Share.css';

class Share extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ""
    }
  }
  render() {
    return (
      <div className="container">
        <div className="shareWrapper">
          <form className="shareForm">
            <ul className="shareList">
              <li>
                <label for="title">제목:</label>
                <input type="text" value={this.state.title} />
              </li>
              <li>
                <label for="title">태그:</label>
                <input type="text" value={this.state.title} />
              </li>
              <li>
                <label for="title">위치:</label>
                <input type="text" value={this.state.title} />
              </li>
              <li>
                <label for="title">나눔 방법:</label>
                <input type="text" value={this.state.title} />
              </li>
              <li>
                <label for="title">내용:</label>
                <textarea value={this.state.title} />
              </li>
            </ul>
            <input type="submit" value="게시"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Share;
