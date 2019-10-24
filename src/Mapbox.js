import React, { Component } from 'react';
import MapGL, { Marker, Popup, FlyToInterpolator} from 'react-map-gl';
import Charger from './Charger';
import data from './data/chargerDataFiltered.json';
import ChargerInfo from './ChargerInfo';

// I decided to use mapbox as a map platform.
// I've also decided to use a React npm package for that to make everything easier

console.log(data);

// console.log(popUpper);

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
      },
      popUpInfo: null
    }
  }  

  popUpper = (chargerData) => {
    console.log(chargerData.Type);
    this.setState({popUpInfo: chargerData});
    console.log(this.state.popUpInfo);
  }

  render () {
    return (
        <React.Fragment>
          <MapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})} 
            mapboxApiAccessToken={token}
            transitionInterpolator={new FlyToInterpolator()}
          >
            {data.chargers.map((charger) => ( 
              <React.Fragment>
                <Marker 
                  latitude={charger.Latitude} 
                  longitude={charger.Longitude}  
                >
                  <Charger key={charger.id} oneCharger={charger} function={this.popUpper} />  
                </Marker>
              </React.Fragment>
            ))}
                <ChargerInfo info={this.state.popupInfo} />
          </MapGL>    
        </React.Fragment>
      );
    }
  }
