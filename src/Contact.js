import React, { Component } from 'react';
import axios from 'axios';
import {Field, Label, Control, Input, Button, TextArea} from 'bloomer';

class Contact extends Component {
      constructor(props){
      super(props);
      this.state = {
      onFormSubmit: false
};
     this.onFormSubmit = this.onFormSubmit.bind(this);
}

onFormSubmit = (e) => {
     e.preventDefault();
     axios.post('https://nodemailer-somerset.herokuapp.com/contact/send/', {
           name: this.person_name.value,
           email: this.email.value,
           message: this.message.value
     })
     .then(function (response){
           console.log(response);
           window.location.reload();
     })
     .catch(function(error){
           console.log(error);
     });
}
      render() {
       return (
  <div>
  <Field>
  {/* Essentially, what I'm attempting to do with these Bloomer components is see if the form I create here will give me the desired axios call results. I'm testing the elements lowercase (as traditional elements, seeing if the Control will override the component style and functionality, in the event that i must switch to uppercase.) In the event that this works, I am then going to rework the Sketchbook, including a Gallery tab as well as creating the redirect button with barba.js

  <form method="post" action="/contact/send">
   <input type="text" placeholder="Enter your name" name="name" ref={input => this.person_name = input}/>
   <input type="text" placeholder="Enter your e-mail" name="email" ref={input => this.email = input} />
   <textarea rows="5" cols="30" placeholder="Your message goes here!" name="message" ref={input => this.message = input}>
   </textarea>
   <button type = "submit" onClick={this.onFormSubmit}>Submit</button>
  </form>

  NOTE: Write logic that refuses axios call if all values are empty!

*/}
  <Label>Name</Label>
  <Control>
    <Input type="text" placeholder="Enter your name" name="name" ref={input => this.person_name = input} />
  </Control>
  </Field>
 
  <Field>
  <Label>E-Mail</Label>
  <Control>
  <Input type="text" placeholder="Enter your e-mail" name="email" ref={input => this.email = input} />
  </Control>
  </Field>

  <Field>
  <Label>Message</Label>
  <Control>
  <TextArea rows="5" cols="30" placeholder="Your message goes here!" name="message" ref={input => this.message = input} />
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
