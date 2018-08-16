import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';
import PropTypes from 'prop-types';
import { Spinner } from '@blueprintjs/core';
import registerServiceWorker from '../registerServiceWorker';
import {BrowserRouter,Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import {render} from 'react-dom';
import Home from '../components/Home';
import {app, base} from '../api/firebase';
import SignIn from '../components/SignIn';
import Logout from '../components/Logout';
import Name from '../components/Name';
import Class from '../components/Class';
import TeachersByCat from '../components/TeachersByCat';

import BecomeMENTR from '../components/BecomeMENTR';
import Become from '../components/Become';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import NavBar from'../components/NavBar';


class App extends Component {
  constructor(props){
    super(props);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
      courseName:"1",
    };

  }
  setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }

  }

  componentWillMount() {

    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        })
        console.log(this.state.currentUser.email)
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        })
      }
    })



  }

  componentWillUnmount() {
    this.removeAuthListener();

  }
  render() {
    if (this.state.loading === true) {
      return (
        <div >
          <Name/>
          <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
          <h3>Loading</h3>
          <Spinner />
            </div>
        </div>
      )
    }
    return(
      <BrowserRouter>

          <div>
           <Name/>
           <NavBar/>
          <Switch>
            <Route exact path="/" render={(props) => {
                    return <Home authenticated={this.state.authenticated} {...props} />
                  }} />
            <Route exact path="/welcome" render={(props) => {
                    return <SignIn setCurrentUser={this.setCurrentUser} {...props} />
                  }} />

            <Route exact path="/logout" component={Logout} />

            <Route exact path="/classes" render={(props) => {
                    return <Class currentUser={this.state.currentUser} {...props} /> }} />

            <Route exact path="/classes/:id" render={(props) => <TeachersByCat{...props} />} />
            <Route exact path="/BecomeMENTR" render={(props) => <BecomeMENTR{...props} />} />
            <Route exact path="/contactUs" component={ContactUs} />
            <Route exact path="/about" component={About} />
          </Switch>
          </div>
      </BrowserRouter>
    )
  }
}
App.propTypes = {
    courseName: PropTypes.string
}

export default App;
