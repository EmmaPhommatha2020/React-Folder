import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'; // all code in HasgRouter when nestes
// import FirstRoute from'./components/FirstRoute.js';
// import SecondRoute from './components/SecondRoute.js';
// import ThirdRoute from './components/ThirdRoute.js';
import './App.css';
import Nav from './Nav.js'
import Colors from './components/Colors.js'
import Results from './components/Results.js'


class App extends Component {
  render() {
    return (

      <HashRouter>
        <div>
          <Nav />
          <Switch>

            {/* <Route exact path='/' component={FirstRoute}/>  or the below code*/}
            {/* <Route exact path='/' render={()=><FirstRoute/>}/>
             <Route path='/second' component={SecondRoute}/>
             <Route path='/third' component={ThirdRoute}/> */}

            <Route exact path='/' component={Colors} />
            <Route path='/results/:color' component={Results} />

          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
