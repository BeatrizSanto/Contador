import React, { Component } from "react";
export default class App extends Component {
  state = {
    number: 0
  };

  add = () => {
    if (this.state.number < 10) {
      this.setState({ number: this.state.number + 1 });
    }
  };

  remove = () => {
    if (this.state.number > 0) {
      this.setState({ number: this.state.number - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.remove}>-</button>
      </div>
    );
  }
}
