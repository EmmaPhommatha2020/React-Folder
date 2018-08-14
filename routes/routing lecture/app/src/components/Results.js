import React, { Component} from 'react';
import axios from 'axios';


class Results extends Component{
  constructor(){
    super()
    this.state ={
      cars: []
    }

  }

  componentDidMount(){
    axios.get('https://joes-autos.herokuapp.com/api/vehicles?color='+ 
    this.props.match.params.color).then( res =>{
      this.setState({
        cars: res
      })
    })
  }

  render(){

    return (
      <div>
        <h1>Results:</h1>
        url params value is: {this.props.match.params.color}
        {JSON.stringify(this.state.cars, null)}
      </div>
    )
  }
}

export default Results;