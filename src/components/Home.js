import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import NavBarContainer from '../containers/NavBarContainer';
import Name from '../components/Name';
import SignIn from '../components/SignIn';

export class Home extends Component {
  constructor(props) {
    super(props);

  }
  render() {
      return (
        <div>
          {this.props.authenticated? (
            <div>
            {console.log("im in")}
              
                <NavBar/>

              </div>
            ):(
              <div>
              {console.log("im not in")}
                <Name/>
                <SignIn/>
              </div>
            )}

        </div>

      );
    }
}

export default Home
