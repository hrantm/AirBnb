import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

// let _mapOptions = {
//   center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
//   zoom: 13
// };

class OfficeMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    // set the map to show SF
    let mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    if (this.props.offices.length > 0) {
      mapOptions = {
        center: { lat: this.props.offices[0].lat, lng: this.props.offices[0].lng }, // this is SF
        zoom: 13
      };
    }


    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.offices);

  }

  componentDidUpdate() {
    console.log(this.props.offices);
    let a = this.props.offices.map( el => el.lat);
    let b = this.props.offices.map( el => el.lng);
    let latMax = Math.max(...a);
    let latMin = Math.min(...a);
    let lngMax = Math.max(...b);
    let lngMin = Math.min(...b);

    this.map.fitBounds({
      south: latMin,
      west: lngMin,
      north: latMax,
      east: lngMax
    });
    // this.map.panTo({lat: this.props.offices[0].lat, lng: this.props.offices[0].lng});
    this.MarkerManager.updateMarkers(this.props.offices);
  }

  _handleMarkerClick(office) {
  this.props.router.push(`offices/${this.props.office.id}`);
}

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    // google.maps.event.addListener(this.map, 'click', event => {
    //   const coords = _getCoordsObj(event.latLng);
    //   this._handleClick(coords);
    // });
  }

 //  _handleClick(coords) {
 //   this.props.router.push({
 //    //  pathname: "benches/new",
 //      pathname: "/",
 //     query: coords
 //   });
 // }

  // return <div className="map" ref={ map => this.mapNode = map}>Map</div>;
  // return <div className="map" ref="map">Map</div>;


  render() {
    console.log(this.props);
    return <div id='map-container' className="map" ref="map">Map</div>;

  }
}

export default withRouter(OfficeMap);
