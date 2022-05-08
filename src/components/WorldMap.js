import {MapContainer, Marker, TileLayer, Tooltip, Circle, SVGOverlay } from 'react-leaflet';
import L from 'leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import 'leaflet/dist/leaflet.css';


const center = [1.35, 103.8]

const getIcon = (_iconSize) => {
    return L.icon({
        iconUrl: require('../static/customIconTransparent.png'),
        iconSize: [_iconSize],
    })
}

const locations = [
    { name: "west", position: [1.35735, 103.7], size: 40, forecast: "cloudy" },
    { name: "east", position: [1.35735, 103.94], size: 30, forecast: "cloudy" },
    { name: "north", position: [1.4, 103.8], size: 50, forecast: "heavy-rain" },
];

const bounds = [
    [1.35735, 103.7],
    [1.35735+.01, 103.7+.02]
]

const WorldMap = () => {

    return (
        <MapContainer 
            style={{height: '50vh', width: '50vw'}}
            center={center} 
            zoom={12}
            scrollWheelZoom={true}
        >
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Circle center={[1.35735, 103.7]} radius={400}>
                <Tooltip direction="bottom"  opacity={1} permanent>
                    Site 1
                </Tooltip>
            </Circle>
            {locations.map((location) => {
                return (
                    <Marker position={location.position} 
                        icon={getIcon(40)} 
                    >
                        <Tooltip>{location.name}</Tooltip>
                    </Marker>
                )
            })}
        </MapContainer>
    )
}

export default WorldMap;