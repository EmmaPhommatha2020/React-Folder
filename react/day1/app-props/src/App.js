import React, { Component } from 'react';
import Button from './Button.js';
import List from './List.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chores: ['dishes', 'laundry'],
      newItem: ''
    }
    this.addToChores = this.addToChores.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addToChores(item) {
    this.setState({
      chores: this.state.chores.concat([item])
    })
  }

  handleChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Passing props to Components</h1>
        </header>
        <input value={this.state.newItem} onChange={this.handleChange} />
        <Button action={this.addToChores.bind(this, this.state.newItem)}>
          Add A New Chore
        </Button>
        <List title="Chores" list={this.state.chores}/>
      </div>
    );
  }
}

export default App;
