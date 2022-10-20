import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const PlacesMap = ({ places }) => {
    return (
        <MapContainer center={[19.39, -99.13]} zoom={11} scrollWheelZoom={false} id="map">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map((place) => (
                <Marker key={place.place_id} position={[place.latitude, place.longitude]} icon={new Icon({iconUrl: markerIconPng})}>
                    <Popup key={place.place_id}>
                        Nombre: {place.name}
                        <br />
                        Teléfono: {place.phone_number}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default PlacesMap;