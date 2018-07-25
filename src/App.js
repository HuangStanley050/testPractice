import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    isError: false
  }
  handleClick = () => this.setState({ counter: this.state.counter + 1 });
  handleDecrement = () => {
    if (this.state.counter - 1 < 0) {
      this.setState({ counter: 0, isError: true });
    }
    else {
      this.setState({ counter: this.state.counter - 1 });
    }

  };
  render() {
    let errorMessage = null;
    if (this.state.isError) {
      errorMessage = "Counter can't go below zero:error";
    }
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter} </h1>
        <button onClick={this.handleClick} data-test="increment-button">Increment counter</button>
        <button onClick={this.handleDecrement} data-test="decrement-button">Decrement</button>
        <p data-test="error-display">{errorMessage}</p>
      </div>
    );
  }
}

export default App;
