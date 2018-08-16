// import React, {Component} from 'react';
// import firebase from 'firebase/app';
// import 'firebase/database';
// import Rebase from 're-base';
// import {app, base} from '../api/firebase';
// import Home from '../components/Home';
// import Class from '../components/Class';
// import DisplayClass from '../components/DisplayClass';
// import { Form, Text, Select  } from 'react-form';
// export class BecomeMENTR extends Component{
//   constructor(props){
//     super(props);
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.state={
//       Name:"",
//       Education:"",
//       Price:"",
//       Email:"",
//       Category:"",
//       text:"",
//       value:"",
//
//   }
// }
//
//   componentWillMount(){
//
//   }
//   componentWillUnmount(){
//
//   }
//   handleChange(event) {
//     this.setState({
//       Education: event.target.value
//     });
//      console.log(this.state.Education)
//   }
//
//   handleSubmit(event) {
//
//     event.preventDefault();
//   }
//
//
//    render() {
//       return (
//         <div className="content">
//         <Form>
//           <form onSubmit={this.handleSubmit}>
//           <input value={this.state.Education} field="Education" type="text" id="Education" placeholder="Education" onChange={this.handleChange}  />
//
//           <button type="submit">Submit</button>
//           {console.log(this.state.Education)}
//          </form>
//         </Form>
//         </div>
//       )
//     }
// }
// export default BecomeMENTR;
