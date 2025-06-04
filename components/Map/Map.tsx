'use client';

import 'leaflet/dist/leaflet.css';
import { Circle, MapContainer, TileLayer, useMapEvent } from 'react-leaflet';

interface MapProps {
  center?: {
    lat: number;
    lng: number;
  };
  lockDrag?: boolean;
  showServiceArea?: boolean;
}


const defaultCenter = {
  lat: 18.37733398653396,
  lng: -65.92457771301271,
};

function DisableDrag() {
  const map = useMapEvent('drag', () => {
    map.dragging.disable();
  });

  return null;
}

export default function Map({ center, lockDrag, showServiceArea }: MapProps) {

  return (
    <MapContainer
      center={center || defaultCenter}
      zoom={9}
      scrollWheelZoom={false}
      style={{height: '400px', width: '100%'}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showServiceArea && (
        <Circle
          center={defaultCenter}
          radius={25000}
        />
      )}
      {lockDrag && <DisableDrag />}
    </MapContainer>
  );
}
