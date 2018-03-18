import React, { Component } from 'react';
import './Address.css';

class Address extends Component {
  constructor(props){
    super(props);
    this.state = {
      address: "위치"
    }
  }

  formatAddress(result){
    let addressArray = result.formatted_address.split(" ");
    const formatted = addressArray.slice(1,4).join(" ");
    return formatted;
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => { // success cb
        console.log( position );
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const googleMapPosition = new window.google.maps.LatLng( lat, lng );
        const googleMapsGeocoder = new window.google.maps.Geocoder();
        googleMapsGeocoder.geocode(
          { 'latLng': googleMapPosition },
          ( results, status ) => {
            const address = this.formatAddress(results[0]);
            this.setState({
              address
            });
          }
        );
      },
      err => { // fail cb
        console.log( err );
      }
  );
  }
  render() {
    return (
      <div
        type="text"
        className="nav-bar">
        {this.state.address}
      </div>
    );
  }
}

export default Address;
