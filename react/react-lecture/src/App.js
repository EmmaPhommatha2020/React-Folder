import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';

// ••• Component is a class from react
class App extends Component {
  // ••• state holds the data specific to that component.
  // ••• we must first initialize state, it must be created before we can change it/edit it/whatever... 
  constructor() {
    super()
    this.state = {
      list: ['learn-react ', 'eat ', 'sleep'],
      inputValue: ''
    }
    // ••• inside constructor, if passing a function through props, must bind()
    this.saveToList = this.saveToList.bind(this)
    this.saveInputValue = this.saveInputValue.bind(this)
  }


  saveInputValue(e) {
    // ••• setState is a method that takes an object as an arugment.
    // ••• that object should have the property name on state that you want to update. 
    // ••• the value should be the value you want to change it to.
    this.setState({
      inputValue: e.target.value
    })
    console.log("saveInput--->",e.target.value)
  }

  saveToList() {
    // ••• make a copy of the array on state.
    let newArr = this.state.list.slice(0)
    // ••• push the saved input value from state to the new array.
    newArr.push(this.state.inputValue)
    this.setState({
      list: newArr,
      inputValue: ''
    })
    console.log("saveTolist--->", this.state.inputValue)
  }

  render() {
    // ••• we are returning JSX from our array of strings so it can be formatted for the JSX below.
    let newList = this.state.list.map((e, i) => {
    console.log("newList--->", e, i)

    // let newList = this.state.list.map((e, i) => {

      return (
        <div key={i + e}>
          <input type="checkbox" />
          <p>{e}</p>
        </div>

        // <Item/>
      )
    })
    


    return (
      <div className="App">
        {/* the only place to passing down the props it in Item.js, and whatever you passed you can use it*/}
        {/*<Item string={this.state.inputValue} listItem={this.state.list}/> */}
        
        <Item save={this.saveToList}/>

        <input
          type="text"
          placeholder='Add new item...'
          // ••• every event listener will pass the event object when it invokes the function that we gave it. 
          // ••• We can decide if we'll use it or not. Below we are using it. In saveInputValue, 
          // ••• we are getting the value of the input from the event object's target value. e.target.value 
          onChange={(event) => this.saveInputValue(event)}
          // ••• when we set the value of the input to the value on state, the two are now tied together. 
          // ••• When we update our input we are updating state with our onChange event function. 
          // ••• When we update state, it will likewise update the input.
          value={this.state.inputValue}
        />
        {/*<button onClick={() => this.saveToList()}>Add Item</button>*/}
        {/* this is where we're rendering our JSX from the .map() above */}

        {newList}
      </div>
    );
  }
}

// ••• your app must be exported or things will break.
export default App;