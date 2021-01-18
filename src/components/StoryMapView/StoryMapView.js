import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { Dialog, DialogContent } from '@material-ui/core';

import styles from './StoryMapView.module.scss';
import StoryService from '../../services/story.service';
import StorySubmit from '../StorySubmit/StorySubmit';

const position = [40.4, -79.9];

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
                        prompt: document.data().prompt,
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
    
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


//     var Jawg_Light = L.tileLayer('https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
// 	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	minZoom: 0,
// 	maxZoom: 22,
// 	subdomains: 'abcd',
// 	accessToken: '<your accessToken>'
// });
    return (
        <div className={styles.mapParent}>
            <MapContainer className={styles.map} center={position} zoom={3} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                />
                {allStories?.map(({ id, name, prompt, storyText, latLong}, index) => (
                    <Marker position={latLong} key={index} icon={markerIcon}>
                        <Popup className = {styles.popup}>
                            <b>{name}</b> <br/> <i>{prompt}</i> <br/> {storyText}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            <button className={styles.addStory} onClick={handleClickOpen}>ADD YOUR STORY</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <StorySubmit />
                </DialogContent>
            </Dialog>
        </div>
    )
}
