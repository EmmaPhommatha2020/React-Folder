import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {    // keep track of the data that changing because the payer and their location
      players: {       // on the court going to be changing i'm keeping track of it in state //
        benched: ['Emma', 'Jenny', 'Noud', 'Kat', 'Loun'],
        onCourt: ['Jack', 'Don', 'Tim', 'Lee', 'ken'] // player will move around base on who i click
      }
    }

    this.moveToBench = this.moveToBench.bind(this);
    this.moveToCourt = this.moveToCourt.bind(this);
  }

  moveToBench(player, i) {
    var court = this.state.players.onCourt;
    var bench = this.state.players.benched;

    bench.push(court.splice(i, 1));

    this.setState({
      players: {
        benched: bench,
        onCourt: court
      }
    })
  }

  moveToCourt(player, i) {
    var court = this.state.players.onCourt;
    var bench = this.state.players.benched;

    court.push(bench.splice(i, 1));

    this.setState({
      players: {
        benched: bench,
        onCourt: court
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Changing State in a Parent Component</h1>
        </header>
        
        {/* <List title="On Court" 
        list={this.state.players.onCourt}
        handleClick={this.moveToBench}/> 

        <List title="Benched" 
        list={this.state.players.Benched}
        handleClick={this.moveToCourt}/>   */}
      </div>
    );
  }
}

export default App;
