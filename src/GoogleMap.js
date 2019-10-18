import React, { Component } from 'react';
import SearchBox from './SearchBox';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 65.01,
      lng: 25.49
    },
    zoom: 13
  };


  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <SearchBox props />
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB-y_G19q_rZEHyRDqJL-97vhPyGl-tnKg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          layerTypes={['TrafficLayer']}
        >
          <AnyReactComponent
            lat={65.01256}
            lng={25.49243}
            text="My Home"
          />
        </GoogleMapReact>
      </div>

    );

  }
}
