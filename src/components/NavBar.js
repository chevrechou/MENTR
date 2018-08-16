import React, { Component } from 'react';
import { Button, Modal, SplitButton, MenuItem} from 'react-bootstrap';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import Logout from '../components/Logout';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'

const NavStyle = {

  margin:0,
  padding: 0,
  top: 0,
  bottom: 0,

  color: '#FFF',
  
};
export class NavBar extends Component{
  constructor(props){
    super(props);
    this.state={
      is_student: false,
      is_teacher:false,

    }
  }

    render(){
      let sideNav;

      sideNav=<div  style={NavStyle}>
                  <Nav onNavClick={() => {window.location="/classes";}}>
                    <NavText> Classes </NavText>
                  </Nav>
                  <Nav onNavClick={() => {window.location="/BecomeMENTR";}}>
                    <NavText>Become a MENTR</NavText>
                  </Nav>
                  <Nav onNavClick={() => {window.location="/BecomeMENTR";}}>
                    <NavText> About </NavText>
                  </Nav>
                  <Nav onNavClick={() => {window.location="/contactUs";}}>
                    <NavText > Contact Us </NavText>
                  </Nav>
                  <Nav onNavClick={() => {window.location="/logout";}}>
                    <NavText >Logout </NavText>
                  </Nav>
              </div>

      return (
        <div className="nav">
          <SideNav>
            {sideNav}
          </SideNav>
        </div>
      )
    }
}
export default NavBar;
