import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
  zoom: 13
};

class OfficeMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.offices);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.offices);
  }

  // return <div className="map" ref={ map => this.mapNode = map}>Map</div>;
  // return <div className="map" ref="map">Map</div>;


  render() {
    console.log(this.props);
    return <div id='map-container' className="map" ref="map">Map</div>;

  }
}

export default withRouter(OfficeMap);
