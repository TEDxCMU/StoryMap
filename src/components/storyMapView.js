import { useState, useEffect } from "react";
import StoryService from "../services/story.service";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import "leaflet/dist/leaflet.css";

const position = [51.505, -0.09]

export default function StoryMapView() {
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
                    const fetchedStory = {
                        id: document.id,
                        name: document.data().name,
                        storyText: document.data().story.text
                    };
                    console.log(document);
                    fetchedStories.push(fetchedStory);
                }
            });
            setAllStories(fetchedStories);
        });
    }, [])
    

    return (
        <div>

            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
