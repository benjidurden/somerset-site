import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, NavLink, Link, Switch, Route} from 'react-router-dom';
import {Field, Label, Control, Input, Button, TextArea} from 'bloomer';
import Home from './Home.js';
import Contact from './Contact.js';
import Sketchbook from './Sketchbook.js';
import Gallery from './Gallery.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <button className="redirect">Redirect</button>
         <Switch>
           <Route exact path = '/' component={Home} />
           <Route exact path = '/contact/' component={Contact} />
            <Route exact path = '/sketchbook/' component={Sketchbook} />
            {/* Would the gallery route not have an exact path if i'm gonna have a route for each image in the gallery? like for enlargement - would i need unique routes? */}
            <Route path = '/gallery/' component={Gallery} />
         </Switch>
         </div>
      </Router>
    );
  }
}

export default App;
