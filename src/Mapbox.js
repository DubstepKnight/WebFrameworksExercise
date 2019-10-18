import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

// import SearchBar from './SearchBar';
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

// I decided to use mapbox as a map platform.
// I've also decided to use a React npm package for that to make everything easier

export default function Mapbox(props) {

  // const Map = ReactMapboxGl({
  //   accessToken:
  //     'pk.eyJ1IjoibnVyc3VsdGFuNGlrIiwiYSI6ImNrMXFvNWU0djAzNjgzY2xlaXI2bzExNWIifQ.N6l1DWxb_8JJ2TA09JCKsQ'
  // });
    return (
      <ReactMapGL
                {...props.mapAccess} {...props.viewport} {...props.mapStyle}
                onViewportChange={(newViewport) => this.setState({viewport: newViewport})}
      />    
    );
  }
  /* return(
     <Map
      movingMethod="jumpTo"
      style="mapbox://styles/mapbox/streets-v9"
      center={[25.4681606, 65.0123596]}
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[25.4681606, 65.0123596]} />
      </Layer>
    </Map> 

  // ) */
