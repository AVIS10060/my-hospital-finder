import React from 'react';
import { MapContainer, TileLayer,Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MyComponent = ({ location, hospitals }) => {
  return (
    <MapContainer center={[location.latitude, location.longitude]} zoom={15} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[location.latitude, location.longitude]}>
        <Popup>You are here</Popup>
      </Marker>
      {hospitals.map((hospital, index) => (
        <Marker key={index} position={[hospital.lat, hospital.lon]}>
          <Popup>{hospital.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MyComponent;
