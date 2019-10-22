import React, { Component } from 'react';
import LandingPage from './LandingPage';
// import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileData: {
        username: "Nursultan"
      }
      
    }
  }

  function 

  render() {
    return (
      <React.Fragment>
        <LandingPage  mapData={this.state.mapData}       
                      sideMenuData={this.state.sideMenuData} 
                      profileData={this.state.profileData} 
                      settingsData={this.state.settingsData} />
      </React.Fragment>
    )
  }

}
