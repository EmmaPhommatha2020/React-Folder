import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  render() {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Initial State</h1>
        </header>
        <p className="App-intro">
          <div>Second since commponent render: {this.state.count}</div>
        </p>
      </div>
    );
  }
}

export default App;


