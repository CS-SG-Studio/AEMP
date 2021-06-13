import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Circle, CircleMarker } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Icon } from "leaflet";
import * as L from "leaflet";
import * as narrativeData from "../../data/narratives.json";
import "./Map.css";


class Map extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const createClusterCustomIcon = function (cluster) {
      return L.divIcon({
        html: cluster.getChildCount(), //'<span>${cluster.getChildCount()}</span>',
        className: 'marker-cluster-custom',
        iconSize: L.point(30 + (cluster.getChildCount() / 1.5), 30 + (cluster.getChildCount() / 1.5), true)
      });
    }

    return (
      <MapContainer center={[37.7749, -122.4194]} zoom={12}>

      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

      <MarkerClusterGroup
        iconCreateFunction={createClusterCustomIcon}
        disableClusteringAtZoom={17} 
        zoomToBoundsOnClick={true}
        spiderfyOnMaxZoom={false} 
        removeOutsideVisibleBounds={true}
        maxClusterRadius={55}
        showCoverageOnHover={false} 
      >
      {narrativeData.features.map(narrative => (
        <Marker 
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
        >
        <Popup>
          {narrative.properties.name} <br /> {narrative.properties.descriptio} <br />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href=narrative.properties.link;
            }}
          > Listen on SoundCloud </button>
        </Popup>
      </Marker>
      ))}
    </MarkerClusterGroup>;

      </MapContainer>
    );
  }

}

export default Map;



