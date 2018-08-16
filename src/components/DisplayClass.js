import React, { Component } from 'react';
import App from '../components/App';
import PropTypes from 'prop-types';
import TeachersByCat from '../components/TeachersByCat';
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";


const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

function refreshPage(){
    window.location.reload();
}
class DisplayClass extends Component{

  constructor(props){
      super(props);
      console.log('display class');
      //this.getComponent=this.getComponent.bind(this);
      this.courseName = this.props.courseName;

      console.log(this.courseName)
      this.state = {
        redirect: false
      }
}
  saySomething(something) {
       console.log(something);
       return(
      //  <Link to= {"/classes/" + something} component={TeachersByCat} />
        <TeachersByCat courseName={this.props.courseName}/>
      )
   }

   handleClick(e) {
       this.saySomething(this.courseName);
   }

   componentDidMount() {
       this.saySomething("component did mount");
   }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }


  render(){
      return(
        <Router>
          <div >
              <h1 onClick={refreshPage }>
                  {this.props.courseName }
              </h1>
          </div>
        </Router>
      )
  }
}


DisplayClass.propTypes = {
    courseName: PropTypes.string
}

export default DisplayClass;
