/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import Leaflet from "leaflet";
import icon from "../assets/planemarker.png";
import { useState } from "react";
import SideDetails from "./SideDetails";

const MapView = () => {
  const state = useSelector((store) => store.reducer);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const planeIcon = Leaflet.icon({
    iconUrl: icon,
    iconSize: [45, 45],
  });
  const handleClick = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };
  console.log(state);
  return (
    <div>
      <h3>{state.flights.length} Uçak Bulundu</h3>
      <p>Harita</p>
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
              <div className="popup">
                <span>Kod:{flight.code}</span>
                <button onClick={() => handleClick(flight.id)}>Detay</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {showDetail && (
        <SideDetails detailId={detailId} setShowDetail={setShowDetail} />
      )}
    </div>
  );
};

export default MapView;
