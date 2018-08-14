
import React from 'react';
import Colors from './components/Colors.js';
import Results from './components/Results.js';
import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

export default(
   <Switch>
     {/* <Route exact path='/' component={FirstRoute}/>  or the below code*/}
    {/* <Route exact path='/' render={()=><FirstRoute/>}/>
               <Route path='/second' component={SecondRoute}/>
               <Route path='/third' component={ThirdRoute}/> */}
       <Route path='/results/:color' component={Results} />
       <Route path='/' component={Colors} />
   </Switch>
)