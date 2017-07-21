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


let RenderNav = () => {
 return (
   <div>
   <NavLink to = '/'>Home</NavLink>
   <NavLink to = '/About/'>About</NavLink>
   <NavLink to = '/Theatre/'>Theatre</NavLink>
   <NavLink to = '/Contact/'>Contact</NavLink>
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
        <RenderNav />
        <i className="fa fa-bars fa-2x" id="bars"></i>
         <Switch>
           <Route exact path = '/' component={Home} />
           <Route exact path = '/About/' component={About} />
           <Route exact path = '/Contact/' component={Contact} />
           <Route exact path = '/Theatre/' component = {Theatre} />
           <Route exact path = '/Sketchbook/' component={Sketchbook} />
            <Route path = '/Gallery/' component={Gallery} />
         </Switch>
         <img src={logo} className="somersetLogo" alt="somersetLogo" />
         </div>
         </div>
      </Router>
    );
  }
}

export default App;