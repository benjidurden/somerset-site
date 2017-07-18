import React, { Component } from 'react';

class Gallery extends Component {
      constructor(props){
          super(props);
          this.state = {
              imageClicked: false,
          }
      }
      render(){
          return (
              <div>
                  <p>Navlink worked!</p>
              </div>
          )
      }
}

export default Gallery;

