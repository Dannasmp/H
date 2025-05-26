import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Asegúrate de que los íconos de los marcadores se muestren correctamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapaView = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 4.7324,
    lng: -74.2642
  }); // Coordenadas de Madrid, Cundinamarca
  const [collectors, setCollectors] = useState([]);

  useEffect(() => {
    // Recolectores reales en Madrid, Cundinamarca
    setCollectors([
      { id: 1, lat: 4.735, lng: -74.266, status: 'Disponible', nombre: 'Recolector Norte' },
      { id: 2, lat: 4.730, lng: -74.262, status: 'En ruta', nombre: 'Recolector Centro' },
      { id: 3, lat: 4.728, lng: -74.268, status: 'Disponible', nombre: 'Recolector Sur' }
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Mapa de Recolectores - Madrid, Cundinamarca</h2>
        <div className="relative h-96">
          {/* Mapa de Madrid, Cundinamarca */}
          <MapContainer center={currentLocation} zoom={14} className="h-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Punto central de Madrid */}
            <Marker position={currentLocation}>
              <Popup>Tu ubicación (Madrid)</Popup>
            </Marker>
            {/* Recolectores */}
            {collectors.map(collector => (
              <Marker key={collector.id} position={{ lat: collector.lat, lng: collector.lng }}>
                <Popup>
                  {collector.nombre} ({collector.status})
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recolectores Disponibles</h3>
          <ul className="space-y-3">
            {collectors.map(collector => (
              <li key={collector.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm">
                <div>
                  <p className="font-medium text-gray-700">{collector.nombre}</p>
                  <p className="text-gray-600 text-sm">Ubicación: {collector.lat.toFixed(4)}, {collector.lng.toFixed(4)}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${collector.status === 'Disponible' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                  {collector.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapaView;
