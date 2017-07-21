import React, { Component } from 'react';
import axios from 'axios';
import {Field, Label, Control, Input, Button, TextArea} from 'bloomer';

class Contact extends Component {
      constructor(props){
      super(props);
      this.state = {
      onFormSubmit: false,
      name: '',
      email: '',
      message: ''
};
     this.onFormSubmit = this.onFormSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
     
}
onFormSubmit = (e) => {
     e.preventDefault();
     axios.post('https://nodemailer-somerset.herokuapp.com/contact/send/', {
           name: this.state.name,
           email: this.state.email,
           message: this.state.message
     })
     .then(function (response){
           console.log(response);
           window.location.reload();
     })
     .catch(function(error){
           console.log(error);
     });
}

handleChange = (e) => {
this.setState({[e.target.name]: e.target.value});
}

      render() {
       return (
  <div>
        {/* Notes: find a way to block the location reload from taking too long. maybe an alert or some background action? */}
  <Field>
  <Label>Name</Label>
  <Control>
    <Input type="text" placeholder="Enter your name" name="name" value = {this.state.name} onChange = {this.handleChange} />
  </Control>
  </Field>
 
  <Field>
  <Label>E-Mail</Label>
  <Control>
  <Input type="text" placeholder="Enter your e-mail" name="email" value = {this.state.email} onChange = {this.handleChange} />
  </Control>
  </Field>

  <Field>
  <Label>Message</Label>
  <Control>
  <TextArea rows="5" cols="30" placeholder="Your message goes here!" name="message" value = {this.state.message} onChange = {this.handleChange} />
  </Control>
  </Field>

  <Field isGrouped>
  <Control>
    <Button isColor='dark' onClick={this.onFormSubmit}>Submit</Button>
  </Control>
  <Control>
    <Button isLink>Clear</Button>
  </Control>
  </Field>

  </div>
  
)
      }
}

export default Contact;
