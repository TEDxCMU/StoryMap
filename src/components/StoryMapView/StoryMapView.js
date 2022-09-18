import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Dialog, DialogContent } from '@material-ui/core';

import styles from './StoryMapView.module.css';
import StoryService from '../../services/story.service';
import StorySubmit from '../StorySubmit/StorySubmit';

const markerIcon = L.icon({
    iconUrl: process.env.PUBLIC_URL + '/marker.svg',
    // shadowUrl: 'leaf-shadow.png',
    iconSize: [32, 32], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
});

const position = [40.442, -79.942];

function ClickComponent({ selectionMarker, setSelectionMarker, handleClickOpen }) {
    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setSelectionMarker({ lat, lng });
            setTimeout(() => {
                handleClickOpen(true);
            }, 300);
        },
    });

    if (selectionMarker) {
        return (
            <Marker position={selectionMarker} icon={markerIcon} />
        )
    }

    return null;
}

function StoryMapView() {
    const [allStories, setAllStories] = useState([]);
    const [selectionMarker, setSelectionMarker] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async function () {
            const allData = StoryService.getAll()
            const newStories = []
            const response = await allData.get();
            response.docs.forEach((doc) => {
                const data = doc.data();
                if (data.approved) {
                    const pos = [data.latLong.lat, data.latLong.lng];
                    newStories.push({
                        id: doc.id,
                        ...data,
                        latLong: pos
                    });
                }
            })
            setAllStories(newStories);
        })();
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.container}>
            <MapContainer className={styles.map} center={position} zoom={16} scrollWheelZoom={true}>
                <ClickComponent
                    selectionMarker={selectionMarker}
                    setSelectionMarker={setSelectionMarker}
                    handleClickOpen={handleClickOpen}
                />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                />
                <MarkerClusterGroup>
                    {allStories?.map(({ id, name, prompt, story, latLong }) => (
                        <Marker key={id} position={latLong} icon={markerIcon}>
                            <Popup className={styles.popup}>
                                {(name && name !== "") ? <b>{name}<br /></b> : ""}
                                <i>{prompt}</i>
                                <br />
                                {story.text}
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <StorySubmit latLong={selectionMarker} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default StoryMapView;
