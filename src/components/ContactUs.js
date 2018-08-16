import React, {Component} from 'react';
import {  Text, Select, Lab  } from 'react-form';
import {Form, FormGroup, Button} from 'reactstrap';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


export class ContactUs extends Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      name:"",
      message:"",
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange=e=>{
    this.setState({
      [e.target.name]:e.target.value
    })

  }
handleSubmit(e){
    e.preventDefault()

  }

  render(){
    return(
      <div>
        <div>
          <NavBar/>
        </div>
      <h1> Contact Us</h1>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <label>Name:</label>
              <input  type="Name"
                      placeholder="Name"
                      name="name"
                      onChange={this.handleChange}
                      required/>
            </FormGroup>

            <FormGroup>
              <label>Email adress:</label>
              <input  type="email"
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                      required/>

            </FormGroup>

            <FormGroup>
              <label>Message: </label>
              <input type="textarea"
                      placeholder="Your message"
                      name="message"
                      onChange={this.handleChange}
                      required/>
            </FormGroup>
            <Button> Submit </Button>
        </Form>
      </div>
    )
  }
}
export default ContactUs;
