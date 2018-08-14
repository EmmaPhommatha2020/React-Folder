/* The code below demonstrates a stateful component that updates
its header text when a user enters numbers into the input field*/


//------------------------------------------------------------------


/*Stateful component Classes in React follow a very
similar pattern as Javascript*/
class Render extends React.Component {
  /*State stores the data specific to that component.
  We must first initialize state, it must be create
  before we can change/ edit it*/

  constructor() {
    /*the super() method gives the constructor access
    to the parent class, in this case the parent class
    is the Component*/

    super();

    /*state should contain anything that the application
    needs to keep track of that will change over time,
    i.e. input values, arrays that will be displayed, etc...*/

    this.state = {
      input: ''
    };

    // See notes below regarding binding methods
    // this.storeInput = this.storeInput.bind(this);
  }

  storeInput(event) {
    /*if we console.log(event), the DOM will return an object
    containing many properties about the action that caused
    it to appear. Most commonly we will use the target
    property. In this case the target property is returning
    what is being typed in our input to the storeInput() method.*/

    // returns the value present in the input element
    // console.log(event.target.value)

    // returns the input element from the DOM
    // console.log(event.target)

    // returns the entire object from the DOM
    // console.log(event)

    /*Correct way to change state, use this.setState() to update
    state. This merges the setState object with the current
    state and gets rendered once every second.

    setState() enqueues changes to the component state and
    tells React that this component and its children need to
    be re-rendered with the updated state. This is the primary
    method you use to update the user interface in response
    to event handlers and server responses.*/

    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter a number"
          onChange={(event) => this.storeInput(event)}
          /*Because we made onChange a callback with the event
          arguement we are effectively passing the event parameter
          to the storeInput method. If we wanted to we could also
          forego the callback method and simply bind storeInput as
          we did above with:

          "this.storeInput = this.storeInput.bind(this);"

          Then we can write onChange as:

          "onChange={this.storeInput}"*/
        />
        <h1>Rendered Text Input: {this.state.input}</h1>
      </div>
    );
  }
}

export default Render;