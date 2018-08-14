
// Update State with Event Listeners //

import React, { Component } from 'react';


class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      passward: ''
    }
    this.handleUpdateUsername = this.handleUpdateUsername.bind(this)
    this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
    this.loginUser = this.loginUser.bind(this)
  }

  handleUpdateUsername(event) {
    console.log(event.target.value); // event: me typing in // target: thing am typing too // value: what i type in //
    this.setState({
      username: event.target.value
    })
  }

  handleUpdatePassword(event) {
    this.setState({
      passward: event.target.value
    })
  }

  loginUser() {
    console.log(`logging in ${this.state.username} with password ${this.state.passward}`)
  }

  render() {
    return (
      <div>
        <input
          value={this.state.username} // the value here make the input flied control by react 
          onChange={this.handleUpdateUsername} // the value that display will be the value in the state
          placeholder="Username" />
        <input
          value={this.state.passward}
          onChange={this.handleUpdatePassword}
          placeholder="Password" />
        <button onClick={this.loginUser}>Login</button>
      </div>
    )
  }
}


export default Child;