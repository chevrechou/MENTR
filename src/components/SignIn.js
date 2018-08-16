import firebase from '../api/firebase';
import React, {Component} from'react';
import Home from '../components/Home';
import '../styles/SignIn.css';
import {Redirect} from 'react-router-dom';
import {Toaster, Intent} from '@blueprintjs/core';
import {app, facebookProvider} from '../api/firebase';

export class SignIn extends Component{
  constructor(props){
    super(props);
    this.authWithFacebook=this.authWithFacebook.bind(this)
    this.authWithEmailPassword=this.authWithEmailPassword.bind(this)
    this.state={
      redirect:false
    }

  }
  authWithFacebook() {
   app.auth().signInWithPopup(facebookProvider)
     .then((user, error) => {
       if (error) {
         this.toaster.show({ intent: Intent.DANGER, message: "Unable to sign in with Facebook" })
       } else {
         this.props.setCurrentUser(user)
         this.setState({ redirect: true })
       }
     })
 }
  authWithEmailPassword(event) {
    event.preventDefault()

    const email = this.emailInput.value
    const password = this.passwordInput.value

    app.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        if (providers.length === 0) {
          // create user
          return app.auth().createUserWithEmailAndPassword(email, password)
        } else if (providers.indexOf("password") === -1) {
          // they used facebook
          this.loginForm.reset()
          this.toaster.show({ intent: Intent.WARNING, message: "Try alternative login." })
        } else {
          // sign user in
          return app.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
        if (user && user.email) {
          this.loginForm.reset()
          this.props.setCurrentUser(user)
          this.setState({redirect: true})
        }
      })
      .catch((error) => {
        this.toaster.show({ intent: Intent.DANGER, message: "Error, try again" })
      })
  }
  render(){
    if (this.state.redirect){
      return <Redirect to='/' />
    }
    return(
      <div className="auth">

        <Toaster ref={(element) =>{this.toaster = element}}/>
        <button style={{width:"100%"}} className="pt-button pt-intent-primary"
          onClick={() => {this.authWithFacebook() }}> Log In with Facebook
        </button>
        <hr style={{marginTop:"10px", marginBottom: "10px"}}/>


        <form onSubmit={(event)=> {this.authWithEmailPassword(event)}}
          ref ={(form) => {this.loginForm=form}} >
          <div style={{marginTop:"10px"}} className="pt-callout pt-icon-info-sign">
            <h5> Note </h5>
            If you do not have an account, this form will create your account.
          </div>

          <label className="pt-email">
            Email
            <input style={{width:100}} className="pt-input" name="email" type="email"
              ref={(input ) => {this.emailInput= input}} placeholder="Enter email">
            </input>
          </label>

          <label className="pt-password">
            Password
            <input style={{width:100}} className="pt-input" name="password" type="password"
              ref={(input ) => {this.passwordInput= input}} placeholder="Password">
            </input>
          </label>

          <input style={{width:100}} type="submit" className="pt-button pt-intent-primary"
            value="Log In">
          </input>

        </form>
      </div>
    )
  }





}
export default SignIn;
