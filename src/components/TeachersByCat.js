import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Rebase from 're-base';
import {app, base} from '../api/firebase';
import Home from '../components/Home';
import DisplayClass from '../components/DisplayClass';
import {Col,Button, Popover, OverlayTrigger, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import NavBar from './NavBar';
import "../styles/NavBar.css";
import 'whatwg-fetch';
import '../styles/TeachersByCat.css';
import App from '../components/App';


export class TeachersByCat extends Component{
  constructor(props){
    super(props);

    // this.currentUser=this.props.currentUser;
    //this.database = firebase.database().ref("Categories").child(id);
    this.state={
      Number:[],
      Education:[],
      post: '',
      Name:[],
      Price:[],
      courseName:"null",
      show: false,
      modalToOpen:-1,
      recipient:"null",
      modal:false,
      UserID:[],
    }




    // this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.toggle = this.toggle.bind(this);

  }

  handleClose() {
    this.setState({ show: false });
  }
  handleContact(){
    console.log('contact clicked')
  }

  handleShow(e,i) {

    // console.log(this.state.Number[e])
    this.setState({
      show: true,
      modalToOpen:e,
      recipient:this.state.Number[e],
     });
     // console.log("number is ", this.state.recipient)
  }


  componentDidMount(props){


    const rootRef = firebase.database().ref();


    var post = rootRef.child("Categories").child(this.props.match.params.id);

     post.once('value', snap => {
       snap.forEach(child => {
         console.log(snap.val());
           this.setState({
               Name: this.state.Name.concat([child.val().Name]),
               Education: this.state.Education.concat([child.val().Education]),
               Price:this.state.Price.concat([child.val().Price]),
               Number:this.state.Number.concat([child.val().Number]),
               UserID:this.state.UserID.concat([child.val().UserID]),

           });

           const postList = this.state.Name.map((dataList, index) =>
                <p>

                    {this.state.Education[index]}

                </p>

            );

            this.setState({
                post: postList
            });
          });
    });
  }
  toggle(e,i) {
    // console.log(this.state.UserID[e])
    this.setState({
      recipient: this.state.Name[e],
      modal: !this.state.modal
    });
    // console.log(this.state.recipient)
  }

  render(){
    // console.log(this.currentUser.email)
    console.log(this.props)
    let courseName=this.props.match.params.id;
    return (
      <div>
        <div className="teacher-section">
          <h5> Select a teacher to learn with from the list below</h5>
          <p>{this.props.courseName}</p>
          {
            this.state.Education.map((name,i ) => {
              return (
                <div className="description">
                  <p><h3>Name: {this.state.Name[i]}</h3></p>
                  <div className="inside-description">
                    <p><h5>Education: {this.state.Education[i]}</h5></p>
                    <p><h5>Price: {this.state.Price[i]}</h5></p>
                    <p><h5>Phone Number: {this.state.Number[i]}</h5></p>
                  </div>
                  <Button color="black" onClick={this.toggle.bind(this,i)}>Contact MENTR</Button>
                  {/*<Button onClick={this.handleShow.bind(this,i)}> Contact MENTR </Button>*/}
                  <hr/>

                </div>
              )
            })
          }
        </div>

        <div>


       <Modal isOpen={this.state.modal} toggle={this.toggle}>
         <ModalHeader>Contact this MENTR</ModalHeader>
         <ModalBody>
          <p>Hi {this.state.recipient}! I would like you to tutor me in <strong> {courseName} </strong> ! Looking forward to
          your reply.
          </p>
          <p>Sincerely,</p>
          <p>user.name</p>

         </ModalBody>
         <ModalFooter>
           <Button color="primary" onClick={this.handleContact}>Contact</Button>{' '}
           <Button color="secondary" onClick={this.toggle}>Cancel</Button>
         </ModalFooter>
       </Modal>



        </div>



      </div>


    )
  }


}
export default TeachersByCat;
