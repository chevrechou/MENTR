import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Rebase from 're-base';
import NavBar from '../components/NavBar';
import {app, base} from '../api/firebase';
import DisplayClass from '../components/DisplayClass';
import { BrowserRouter, Router, Redirect, Route, Switch , Link } from "react-router-dom";
import TeachersByCat from '../components/TeachersByCat';
import '../styles/Class.css';
import App from '../components/App';


export class Class extends Component{
  constructor(props){
    super(props);
    this.database = firebase.database().ref("All categories");
    this.currentUser=this.props.currentUser;
    this.state={
      courses:[],
      Class:[],
      post: '',
      names:[],


    }

};

componentDidMount(){
const rootRef = firebase.database().ref();
const post = rootRef.child('All categories').orderByKey();

     post.once('value', snap => {
       snap.forEach(child => {
           this.setState({
               names: this.state.names.concat([child.key]),
               Class: this.state.Class.concat([child.val().Class]),

           });

           const postList = this.state.names.map((dataList, index) =>
                <p>
                    {this.state.names[index]}
                    <hr />
                </p>

            );

            this.setState({
                post: postList
            });

          });
    });

  }




  render(){
console.log(this.currentUser.email)
    return (


        <div>
          <div className="select">
            <h3> Select a class to learn from the list below</h3>

            <div className="list">
              {
                this.state.names.map((name,i ) => {
                  return (
                    <Link to={"/classes/"+this.state.names[i]}>
                      <DisplayClass courseName={this.state.names[i]} />
                    </Link>
                  )
                })
              }

            </div>
          </div>
        </div>

    )
  }
}


export default Class;
