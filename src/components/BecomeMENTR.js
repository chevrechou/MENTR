import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Rebase from 're-base';
import {app, base} from '../api/firebase';
import Home from '../components/Home';
import NavBar from './NavBar';
import Class from '../components/Class';
import DisplayClass from '../components/DisplayClass';
import { Form, Text, Select  } from 'react-form';

const TeacherRef = firebase.database().ref("Categories");

const statusOptions = [
  {
    label: 'Accounting',
      value: 'Accounting',
    },
    {
      label: 'Biology',
      value: 'Biology',
    },
    {
      label: "Computer Science",
      value: 'Computer Science',
    },
    {
      label: 'Cats',
      value: 'Cats',
    },
    {
      label: 'Writing',
      value: 'Writing',
    },

    {
      label: 'Biology',
      value: 'Biology',


  },

]



export class BecomeMENTR extends Component{
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNChange = this.handleNChange.bind(this);
    this.handleEChange = this.handleEChange.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);

    this.Reset=this.Reset.bind(this);

    this.state={
      Name:"",
      Education:"",
      Price:"",
      Email:"",
      Category:"null",
      Number:"",
      success:false,
    }
  }
  handlePChange(event){
     this.setState({
       Price:event.target.value,
     })
   }
   handleEmailChange(event){
     this.setState({
        Email:event.target.value,
     })
   }
   handleCChange(event){
     this.setState({
       Category:event.target.value,
     })
   }
   handleNumberChange(event){
     this.setState({
        Number:event.target.value,
     })
   }

  handleNChange(event){
     this.setState({
       Name:event.target.value,
     })
     console.log(this.state.Name)
  }
  handleEChange(event){
    this.setState({
      Education: event.target.value,
    })
  }
  handleSubmit(e) {
    e.preventDefault()


    TeacherRef.child(this.state.Category).push({
      Name:this.state.Name,
      Education: this.state.Education,
      Price:this.state.Price,
      Email:this.state.Email,
      Category:this.state.Category,
      Number:this.state.Number,
    })
    console.log('success');
    this.setState({
      success:true
    })


  }
  Reset(){
    if (this.state.success) {

      this.refs.form.reset();
     }
    console.log("form is reset")

  }

  render(){

    return (
      <div>
        <div id="nav">
          <NavBar/>
        </div>

      <Form>

        <form onSubmit={this.handleSubmit} ref="form">

          <p>
            <p>Please enter your full name</p>
            <input onChange={this.handleNChange} value={this.state.Name} field="Name" type="text" id="Name" placeholder="Name" ref="name"/>
{console.log(this.state.Name)}
          </p>
                  <p></p>

          <p>
            <p>Please select a category</p>
            <select onChange={this.handleCChange} value={this.state.Category} field="Category" id="Category" placeholder="Category" options="Select" ref="category" required>

              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
                <option value="Math">Math</option>
              <option value="mango">Mango</option>
            </select>
          </p>
                  <p></p>

          <p>
            <p>Please enter your asking price</p>
            <input onChange={this.handlePChange} value={this.state.Price} field="Price" id="Price" placeholder="Price" ref="price" required/>
          </p>
                  <p></p>

          <p>
            <p>Please enter the name of your University</p>
            <input onChange={this.handleEChange} value={this.state.Education} field="Education" id="Education" placeholder="Education" ref="education" required/>
          </p>
                  <p></p>

          <p>
            <p>Please enter the email</p>
            <input onChange={this.handleEmailChange} value={this.state.Email} field="Email" type="Email" id="Email" placeholder="Email" ref="email" required/>
          </p>
                  <p></p>

          <p>
            <p>Please enter your telephone number</p>
            <input onChange={this.handleNumberChange} value={this.state.Number} field="Number" placeholder="Number" ref="number" required/>
          </p>
                  <p></p>

          <button type="submit" onClick={this.Reset}>Submit</button>
          {console.log(this.state.value)}
        </form>

    </Form>


    </div>

    )
  }


}
export default BecomeMENTR;
