/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import Leaflet from "leaflet";
import icon from "../assets/planemarker.png";

const MapView = () => {
  const state = useSelector((store) => store.reducer);
  const planeIcon = Leaflet.icon({
    iconUrl: icon,
    iconSize: [45, 45],
  });
  console.log(state);
  return (
    <div>
      <h3>Harita</h3>
      <MapContainer
        center={[39.1417632, 34.1284977]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {state.flights.map((flight) => (
          <Marker icon={planeIcon} position={[flight.lat, flight.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
