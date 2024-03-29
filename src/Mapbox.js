import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import ChargerPin from './ChargerPin';
import data from './data/chargerDataFiltered.json';
import GeoJSONData from './data/dataInGeoJSONFormat.json'
import ChargerInfo from './ChargerInfo';
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

// I decided to use mapbox as a map platform.
// I've also decided to use a React npm package for that to make everything easier

// console.log(data);

// console.log(popUpper);

const token = 'pk.eyJ1IjoibnVyc3VsdGFuNGlrIiwiYSI6ImNrMXFvNWU0djAzNjgzY2xlaXI2bzExNWIifQ.N6l1DWxb_8JJ2TA09JCKsQ';

console.log(data); 

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
      popUpInfo: null,
      searchResultLayer: null
    }
  }  
  
  chargerInfoShower = () => {
    // event.preventDefault();
    return(
      <ChargerInfo { ...this.state.popUpInfo } />
    )
  }
  
  chargerDataSender = (chargerData) => {
    // console.log(chargerData.Type);
    this.setState({popUpInfo: chargerData});
    // console.log(this.chargerInfoShower);
    setTimeout(() => {
      console.log(this.state.popUpInfo)
    }, 1);
    // this.chargerInfoShower();
  }

  mapRef = React.createRef()

  handleViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }
  
  handleGeocoderViewportChange = (viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 }
 
    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    })
  }

  forwardGeocoder = (query) => {
    let matchingFeatures = [];
    for (var i = 0; i < GeoJSONData.features.length; i++) {
      let feature = GeoJSONData.features[i];
      if (feature.properties.title.toLowerCase().search(query.toLowerCase()) !== -1 || feature.properties.address.toLowerCase().search(query.toLowerCase()) !== -1) {
        feature['place_name'] = feature.properties.title;
        feature['place_address'] = feature.properties.address;
        feature['place_town'] = feature.properties.town;
        feature['center'] = feature.geometry.coordinates;
        matchingFeatures.push(feature);
      }
    }
    return matchingFeatures;
  }

  render () {
    return (
        <React.Fragment>
          <MapGL
            {...this.state.viewport}
            ref={this.mapRef}
            onViewportChange={(viewport) => this.setState({viewport})} 
            mapboxApiAccessToken={token}
          >
            <Geocoder
              mapRef={this.mapRef}
              onViewportChange={this.handleGeocoderViewportChange}
              mapboxApiAccessToken={token}
              position="top-left"
              countries="FI"
              localGeocoder={this.forwardGeocoder}
              placeholder="Search for chargers"
            />
            {data.map((charger) => ( 
              <React.Fragment>
                <Marker 
                  latitude={charger.Latitude} 
                  longitude={charger.Longitude}  
                >
                  <ChargerPin key={charger.id} oneCharger={charger} chargerDataSender={this.chargerDataSender} />  
                </Marker>
              </React.Fragment>
            ))}     
          </MapGL>    
            {this.chargerInfoShower()}
        </React.Fragment>
      );
    }
  }
