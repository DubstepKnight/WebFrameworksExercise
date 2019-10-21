import React, { Component } from 'react';
import LandingPage from './LandingPage';
// import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapData: {
        viewport: {
          width: 400,
          height: 400,
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 8
        }  
      }
    }
  }

  onViewportChange = () => {
    
  }

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
