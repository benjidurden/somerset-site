import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import Gallery from './Gallery.js';
let RenderGallery = () => {
  return (
    <div>
    <NavLink to='/gallery/'>Gallery</NavLink>
     <i className="fa fa-bars fa-2x" id="bars"></i>
    </div>
  )
}

class Sketchbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSketchSubmit: false,
    }
    this.onSketchSubmit = this.onSketchSubmit.bind(this);
  }
  onSketchSubmit = () => {
    this.setState({ onSketchSubmit: true });
  }
  render() {
    return (
      <Router>
        <div>
          <RenderGallery />
          <Switch>
            {/* This NavLink only worked when the component route was mentioned in the same file. Can react's NavLink not recognize routes if they aren't in the same file? */}
            <Route path='/gallery' component={Gallery} />
          </Switch>
          <br />
          <br />
          <button className="phantom" onClick={this.onSketchSubmit}>Phantom Push</button>
          <div className="sketchboard">
            <p>Sketch goes here!</p>
          </div>
        </div>
      </Router>

    )
  }
}
export default Sketchbook;
