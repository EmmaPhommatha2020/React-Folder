import React, { Component } from 'react';
import './customers.css';
import axios from 'axios';




class Customers extends Component {
  constructor() {
    super() // initialize state
    this.state = {
      customerssssss: []
    }
  }
 
  componentDidMount() { // life cycle method
    axios.get('/api/customers')
      .then(cat => this.setState({ customerssssss: cat.data }, () => console.log('Customers info...', cat)
    ));
  }

  render() {
    return (
      <div >
        <h2>Customers</h2>
        <ul>
          {this.state.customerssssss.map(item =>
            <li key={item.id}> {item.firstName} {item.lastName} </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Customers;
