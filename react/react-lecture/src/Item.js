/* ••• stateless functional component*/

// import React from 'react';

// ••• props can't not be change, if need to change the data do it at parent component.
// ••• props read only. 
// •••
// ••• a functional component doesn't have state, the constructor method or the render method... 
// ••• it just returns JSX. You still need to import React above though

// function Item(props) { // props just an object.
//   return (
//     <div>
//       <h1>TO DO:</h1>
//       <h2>{props.string}</h2>
//     </div>
//   )
// }
// // ••• it also still needs to be exported
// export default Item;


/* ••• stateless component*/

/* */

import React, {Component} from 'react';

class Item extends Component {
  render(){
    console.log("This.Props--->", this.props)
    return(
      <div>
     {/*<h1>TO DO:</h1>
     <h2>{this.props.string}</h2>
     <h2>{this.props.listItem}</h2>*/}

     {/* <h1>This is a child</h1>*/}
     
     <button onClick={this.props.save}>Add Item</button>
     </div>
    )
  }
}

export default Item;