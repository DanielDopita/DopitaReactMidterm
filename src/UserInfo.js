import React, { Component } from "react";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      name: "John Doe",
      profession: "Software Engineer",
      luckyNumber: Math.floor(Math.random() * 100) + 1
    };
  }

  generateNewLuckyNumber = () => {
    this.setState({
      luckyNumber: Math.floor(Math.random() * 100) + 1
    });
  };

  render() {
    return (
      <div className="user-info">
        <h2>Name: {this.state.name}</h2>
        <h3>Profession: {this.state.profession}</h3>
        <p>
          Your lucky number is: 
          <span className="lucky-number"> {this.state.luckyNumber}</span>
        </p>
        <div className="button-group">
          <button onClick={this.props.handleClick}>Show Alert</button>
          <button 
            onClick={this.generateNewLuckyNumber}
            className="lucky-button"
          >
            Generate New Lucky Number
          </button>
        </div>
      </div>
    );
  }
}

export default UserInfo;