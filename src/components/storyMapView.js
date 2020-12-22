import { useState, useEffect } from "react";
import StoryService from "../services/story.service";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
// import "leaflet/dist/leaflet.css";
// import MarkerImage from "../public/logo192.png";
const position = [51.505, -0.09]

export default function StoryMapView() {
    const markerIcon = L.icon({
        iconUrl: process.env.PUBLIC_URL + '/marker.svg',
        // shadowUrl: 'leaf-shadow.png',
    
        iconSize:     [32, 32], // size of the icon
        // shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
        // shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
    });
    const [allStories, setAllStories] = useState([]);

    useEffect(() => {
        const allData = StoryService.getAll()
        const fetchedStories = []

        // TODO: In order to get permissions for this, read and write were set to true
        // seems unsafe, we should fix that later
        allData.get()
        .then(response => {
            response.docs.forEach(document => {
                if (document.data().approved) {
                    const pos = [document.data().latLong.lat, document.data().latLong.lng];
                    const fetchedStory = {
                        id: document.id,
                        name: document.data().name,
                        storyText: document.data().story.text,
                        latLong: pos
                    };
                    console.log(fetchedStory.latLong);

                    fetchedStories.push(fetchedStory);
                }
            });
            setAllStories(fetchedStories);
        });
    }, [])
    

    return (
        <div>

            <MapContainer center={position} zoom={1} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {allStories?.map(({ id, name, storyText, latLong}, index) => (
                    <Marker position={latLong} key={index} icon={markerIcon}>
                    <Popup>
                        {name} <br/> {storyText}
                    </Popup>
                    </Marker>
                    
                ))}

                
            </MapContainer>
        </div>
    )
}
