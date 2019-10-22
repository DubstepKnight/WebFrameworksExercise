import React, { Component } from 'react';
import MapGL, {Marker, Popup, NavigationControl, FullscreenControl} from 'react-map-gl';

// I decided to use mapbox as a map platform.
// I've also decided to use a React npm package for that to make everything easier

const token = 'pk.eyJ1IjoibnVyc3VsdGFuNGlrIiwiYSI6ImNrMXFvNWU0djAzNjgzY2xlaXI2bzExNWIifQ.N6l1DWxb_8JJ2TA09JCKsQ';

export default class Mapbox extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100vw',
        height: '100vh',
        latitude: 65.021545,
        longitude: 25.469885,
        zoom: 12
      }
    }
  }

    render () {
      return (
        <MapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})} 
          mapboxApiAccessToken={token}
        />    
      );
    }
  }
