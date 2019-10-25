import React, { Component } from 'react';
import axios from 'axios';
import LandingPage from './LandingPage';
// import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
      OngoingCharge: {
        time: "15s",
        price: "1.6Euro"
      }
    }
  }

  Registrator = (email, password) => {
    this.setState({ userInfo: {
      email, 
      password
    }});
  }

  Loginer = (email, password) => {
    axios.get('http://ec2-3-84-220-144.compute-1.amazonaws.com/signIn', {
      auth: {
        email: email,
        password: password
      },
    })
      .then(
        response => {
          this.setState({
            email: email,
            password: password
          })
          axios.get(`http://ec2-3-84-220-144.compute-1.amazonaws.com/getUserId/${username}`, {
            auth: {
              username: username,
              password: password
            },
          })
        })
          .then(response => {
            this.setState({ idUser: response.data[0].idUser })
            this.getUserHistory();
          });
}

  Logouter = () => {
    this.setState({ userInfo: {
      email: null,
      password: null
    }});
  }

  OnChargeStateChanger = () => {
    this.setState({ OngoingCharge: {
      
    }});
  }



  render() {
    return (
      <React.Fragment>
        <LandingPage  mapData={this.state.mapData}       
                      sideMenuData={this.state.sideMenuData} 
                      profileData={this.state.profileData} 
                      OngoingCharge={this.state.OngoingCharge}
                      Loginer={this.Loginer}
                      Logouter={this.Logouter}
                      Registrator={this.Registrator}
                      OnChargeStateChanger={this.OnChargeStateChanger}
        />
      </React.Fragment>
    )
  }

}
