import React, { Component } from 'react';

export default class GoogleMap extends Component {
    componentDidMount () {
        new google.maps.Map(this.refs.map,{
          zoom: 12,
          center: {
              lat: this.props.lat,
              lng: this.props.lon
          }
        });
    }
    
    
    
     render(){
         return (
           // outside here, use this.refs.map will point to here
           <div ref="map" />
         );
     }
}