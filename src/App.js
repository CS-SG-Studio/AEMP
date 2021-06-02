import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Circle, CircleMarker } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Icon } from "leaflet";
//import * as evictionData from "./data/all_sf_evictions.json";
//import * as narrativeData from "./data/narratives.json";
import Map from './components/map/Map';
import "./App.css";
// ADDED
import Disclaimer from './components/Disclaimer';
import {useState, useEffect} from 'react';
import twitterlogo from './twitterlogo.png';
import facebooklogo from './facebook.png';
import linklogo from './linklogo.png';
export default function App() {
  return (
    <Map />
  )
}







/*
ReactDOM.render(
  <div>
      Hello World
  </div>,
  
  document.getElementById('root'),
);
*/


/*
export default function App() {
  return <MapContainer center={[37.7749, -122.4194]} zoom={12}>

    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

    <MarkerClusterGroup spiderfyDistanceMultiplier={1}
            showCoverageOnHover={true}>
      {narrativeData.features.map(narrative => (
        <CircleMarker 
          key={narrative.properties.address}
          center={[
            narrative.geometry.coordinates[1],
            narrative.geometry.coordinates[0],
        ]}
        position={[
          narrative.geometry.coordinates[1],
          narrative.geometry.coordinates[0],
      ]}
      radius={5}
        />
      ))}
    </MarkerClusterGroup>;

  </MapContainer>
}
*/