import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Barba from 'barba.js';
import Home from './Home.js';
import Theatre from './Theatre.js';
import About from './About.js';
import Contact from './Contact.js';
import Sketchbook from './Sketchbook.js';
import Gallery from './Gallery.js';

let renderNav = () => {
 return (
   <div>
   <NavLink to = '/'>Home</NavLink>
   <NavLink to = '/about/'>About</NavLink>
   <NavLink to = '/theatre/'>Theatre</NavLink>
   <NavLink to = '/contact/'>Contact</NavLink>
   <i className="fa fa-bars fa-2x" id="bars"></i>
   </div>
 )
}

class App extends Component {

  componentDidMount = () => {
    console.log('Component Did Mount!');
    Barba.Pjax.start();
  }

  render() {
    return (
      <Router>
       <div id="barba-wrapper">
        <div className="barba-container">
        <renderNav />
        <i className="fa fa-bars fa-2x" id="bars"></i>
         <Switch>
           <Route exact path = '/' component={Home} />
           <Route exact path = '/about/' component={About} />
           <Route exact path = '/contact/' component={Contact} />
           <Route exact path = '/theatre/' component = {Theatre} />
           <Route exact path = '/sketchbook/' component={Sketchbook} />
            <Route path = '/gallery/' component={Gallery} />
         </Switch>
         <img src={logo} className="somersetLogo" alt="somersetLogo" />
         </div>
         </div>
      </Router>
    );
  }
}

export default App;
