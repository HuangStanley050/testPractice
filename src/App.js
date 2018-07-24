import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }
  handleClick = () => this.setState({ counter: this.state.counter + 1 });
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter} </h1>
        <button onClick={this.handleClick} data-test="increment-button">Increment counter</button>
      </div>
    );
  }
}

export default App;
